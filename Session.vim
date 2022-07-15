let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
silent only
silent tabonly
cd ~/Desktop/dev/webapps/evcv
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
if &shortmess =~ 'A'
  set shortmess=aoOA
else
  set shortmess=aoO
endif
badd +252 ~/Desktop/dev/webapps/evcv/src/components/home/home.js
badd +78 src/components/home/homeComponents.js
badd +0 src/themes.js
argglobal
%argdel
edit ~/Desktop/dev/webapps/evcv/src/components/home/home.js
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 63 + 96) / 192)
exe 'vert 2resize ' . ((&columns * 63 + 96) / 192)
exe 'vert 3resize ' . ((&columns * 64 + 96) / 192)
argglobal
balt src/components/home/homeComponents.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 252 - ((24 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 252
normal! 037|
wincmd w
argglobal
if bufexists(fnamemodify("src/themes.js", ":p")) | buffer src/themes.js | else | edit src/themes.js | endif
if &buftype ==# 'terminal'
  silent file src/themes.js
endif
balt src/components/home/homeComponents.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 37 - ((29 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 37
normal! 027|
wincmd w
argglobal
if bufexists(fnamemodify("src/components/home/homeComponents.js", ":p")) | buffer src/components/home/homeComponents.js | else | edit src/components/home/homeComponents.js | endif
if &buftype ==# 'terminal'
  silent file src/components/home/homeComponents.js
endif
balt ~/Desktop/dev/webapps/evcv/src/components/home/home.js
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let &fdl = &fdl
let s:l = 78 - ((45 * winheight(0) + 25) / 51)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 78
normal! 017|
wincmd w
2wincmd w
exe 'vert 1resize ' . ((&columns * 63 + 96) / 192)
exe 'vert 2resize ' . ((&columns * 63 + 96) / 192)
exe 'vert 3resize ' . ((&columns * 64 + 96) / 192)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
