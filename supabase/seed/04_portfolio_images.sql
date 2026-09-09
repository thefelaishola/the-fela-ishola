-- Link portfolio images to their projects, and set each project's cover image.
-- Generated from the actual uploaded filenames.

insert into public.portfolio_images (project_id, image_url, alt_text, sort_order)
select id, '/portfolio/best-promotions/1001117034.png', null, 1 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117038.png', null, 2 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117039.png', null, 3 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117051.png', null, 4 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117053.png', null, 5 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117055.png', null, 6 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117057.png', null, 7 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117058.png', null, 8 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117067.png', null, 9 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117069.png', null, 10 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117070.png', null, 11 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117080.png', null, 12 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117090.png', null, 13 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117091.png', null, 14 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117094.png', null, 15 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117095.png', null, 16 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117096.png', null, 17 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117097.png', null, 18 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117098.png', null, 19 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/best-promotions/1001117100.png', null, 20 from public.portfolio_projects where slug = 'best-promotions'
union all
select id, '/portfolio/book-covers/1001117706.png', null, 1 from public.portfolio_projects where slug = 'various-clients-book-cover'
union all
select id, '/portfolio/book-covers/1001117707.png', null, 2 from public.portfolio_projects where slug = 'various-clients-book-cover'
union all
select id, '/portfolio/book-covers/1001117708.png', null, 3 from public.portfolio_projects where slug = 'various-clients-book-cover'
union all
select id, '/portfolio/book-covers/1001117709.png', null, 4 from public.portfolio_projects where slug = 'various-clients-book-cover'
union all
select id, '/portfolio/book-covers/1001117710.png', null, 5 from public.portfolio_projects where slug = 'various-clients-book-cover'
union all
select id, '/portfolio/book-covers/1001117719.png', null, 6 from public.portfolio_projects where slug = 'various-clients-book-cover'
union all
select id, '/portfolio/book-covers/1001117720.png', null, 7 from public.portfolio_projects where slug = 'various-clients-book-cover'
union all
select id, '/portfolio/book-covers/1001117721.png', null, 8 from public.portfolio_projects where slug = 'various-clients-book-cover'
union all
select id, '/portfolio/book-covers/1001117722.png', null, 9 from public.portfolio_projects where slug = 'various-clients-book-cover'
union all
select id, '/portfolio/book-covers/1001117723.jpg', null, 10 from public.portfolio_projects where slug = 'various-clients-book-cover'
union all
select id, '/portfolio/book-covers/1001117724.png', null, 11 from public.portfolio_projects where slug = 'various-clients-book-cover'
union all
select id, '/portfolio/book-covers/1001117725.png', null, 12 from public.portfolio_projects where slug = 'various-clients-book-cover'
union all
select id, '/portfolio/jwiss-by-mijesty/1001117268.png', null, 1 from public.portfolio_projects where slug = 'jwiss-by-mijesty'
union all
select id, '/portfolio/jwiss-by-mijesty/1001117269.png', null, 2 from public.portfolio_projects where slug = 'jwiss-by-mijesty'
union all
select id, '/portfolio/jwiss-by-mijesty/1001117270.png', null, 3 from public.portfolio_projects where slug = 'jwiss-by-mijesty'
union all
select id, '/portfolio/jwiss-by-mijesty/1001117271.png', null, 4 from public.portfolio_projects where slug = 'jwiss-by-mijesty'
union all
select id, '/portfolio/jwiss-by-mijesty/1001117272.png', null, 5 from public.portfolio_projects where slug = 'jwiss-by-mijesty'
union all
select id, '/portfolio/jwiss-by-mijesty/1001117273.png', null, 6 from public.portfolio_projects where slug = 'jwiss-by-mijesty'
union all
select id, '/portfolio/jwiss-by-mijesty/1001117274.png', null, 7 from public.portfolio_projects where slug = 'jwiss-by-mijesty'
union all
select id, '/portfolio/jwiss-by-mijesty/1001117275.png', null, 8 from public.portfolio_projects where slug = 'jwiss-by-mijesty'
union all
select id, '/portfolio/jwiss-by-mijesty/1001117276.png', null, 9 from public.portfolio_projects where slug = 'jwiss-by-mijesty'
union all
select id, '/portfolio/jwiss-by-mijesty/1001117277.png', null, 10 from public.portfolio_projects where slug = 'jwiss-by-mijesty'
union all
select id, '/portfolio/jwiss-by-mijesty/1001117278.png', null, 11 from public.portfolio_projects where slug = 'jwiss-by-mijesty'
union all
select id, '/portfolio/jwiss-by-mijesty/1001117279.png', null, 12 from public.portfolio_projects where slug = 'jwiss-by-mijesty'
union all
select id, '/portfolio/logos/1001120527.png', null, 1 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120528.png', null, 2 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120529.png', null, 3 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120530.png', null, 4 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120531.png', null, 5 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120532.png', null, 6 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120533.png', null, 7 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120534.png', null, 8 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120535.png', null, 9 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120536.png', null, 10 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120538.png', null, 11 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120539.png', null, 12 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120540.png', null, 13 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120541.png', null, 14 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120542.png', null, 15 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120543.png', null, 16 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120544.png', null, 17 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120545.png', null, 18 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120550.png', null, 19 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120551.png', null, 20 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120553.png', null, 21 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120554.png', null, 22 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120555.png', null, 23 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120556.png', null, 24 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120557.png', null, 25 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120559.png', null, 26 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120560.png', null, 27 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120561.png', null, 28 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120562.png', null, 29 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120563.png', null, 30 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120564.png', null, 31 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120565.png', null, 32 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120569.png', null, 33 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120570.png', null, 34 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120571.png', null, 35 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120572.png', null, 36 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120573.png', null, 37 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120574.png', null, 38 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120575.png', null, 39 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/logos/1001120576.png', null, 40 from public.portfolio_projects where slug = 'various-clients-logos'
union all
select id, '/portfolio/mummy-alaba/1001146888.png', null, 1 from public.portfolio_projects where slug = 'mummy-alaba'
union all
select id, '/portfolio/mummy-alaba/1001146889.png', null, 2 from public.portfolio_projects where slug = 'mummy-alaba'
union all
select id, '/portfolio/mummy-alaba/1001146890.png', null, 3 from public.portfolio_projects where slug = 'mummy-alaba'
union all
select id, '/portfolio/mummy-alaba/1001146891.png', null, 4 from public.portfolio_projects where slug = 'mummy-alaba'
union all
select id, '/portfolio/mummy-alaba/1001146892.png', null, 5 from public.portfolio_projects where slug = 'mummy-alaba'
union all
select id, '/portfolio/omas-hairs-essentials/1001146868.png', null, 1 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146869.png', null, 2 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146870.png', null, 3 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146871.png', null, 4 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146872.png', null, 5 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146873.png', null, 6 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146874.png', null, 7 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146875.png', null, 8 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146876.png', null, 9 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146877.png', null, 10 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146878.png', null, 11 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146879.png', null, 12 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146880.png', null, 13 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146881.png', null, 14 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146882.png', null, 15 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146883.png', null, 16 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146884.png', null, 17 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146885.png', null, 18 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146886.png', null, 19 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/omas-hairs-essentials/1001146887.png', null, 20 from public.portfolio_projects where slug = 'omas-hairs-essentials'
union all
select id, '/portfolio/trays-n-dishes/1001117741.png', null, 1 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117742.png', null, 2 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117743.png', null, 3 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117744.png', null, 4 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117745.png', null, 5 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117746.png', null, 6 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117747.png', null, 7 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117748.png', null, 8 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117749.png', null, 9 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117750.png', null, 10 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117752.png', null, 11 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117753.png', null, 12 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117754.png', null, 13 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117755.png', null, 14 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/trays-n-dishes/1001117756.png', null, 15 from public.portfolio_projects where slug = 'trays-n-dishes'
union all
select id, '/portfolio/universal-climate-initiative/1001117209.png', null, 1 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117210.png', null, 2 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117211.png', null, 3 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117212.png', null, 4 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117213.png', null, 5 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117214.png', null, 6 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117224.png', null, 7 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117225.png', null, 8 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117226.png', null, 9 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117233.png', null, 10 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117235.png', null, 11 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117238.png', null, 12 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117242.png', null, 13 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117243.png', null, 14 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117244.png', null, 15 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117245.png', null, 16 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117246.png', null, 17 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117247.png', null, 18 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117248.png', null, 19 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/universal-climate-initiative/1001117250.png', null, 20 from public.portfolio_projects where slug = 'universal-climate-initiative'
union all
select id, '/portfolio/wedding-invitations/1001117622.png', null, 1 from public.portfolio_projects where slug = 'various-clients-wedding-iv'
union all
select id, '/portfolio/wedding-invitations/1001117623.png', null, 2 from public.portfolio_projects where slug = 'various-clients-wedding-iv'
union all
select id, '/portfolio/wedding-invitations/1001117624.png', null, 3 from public.portfolio_projects where slug = 'various-clients-wedding-iv'
union all
select id, '/portfolio/wedding-invitations/1001117625.png', null, 4 from public.portfolio_projects where slug = 'various-clients-wedding-iv'
union all
select id, '/portfolio/zinny-aesthetics/1001117382.png', null, 1 from public.portfolio_projects where slug = 'zinny-aesthetics'
union all
select id, '/portfolio/zinny-aesthetics/1001117383.png', null, 2 from public.portfolio_projects where slug = 'zinny-aesthetics'
union all
select id, '/portfolio/zinny-aesthetics/1001117384.png', null, 3 from public.portfolio_projects where slug = 'zinny-aesthetics'
union all
select id, '/portfolio/zinny-aesthetics/1001117388.png', null, 4 from public.portfolio_projects where slug = 'zinny-aesthetics'
union all
select id, '/portfolio/zinny-aesthetics/1001117392.png', null, 5 from public.portfolio_projects where slug = 'zinny-aesthetics';

-- Set each project's cover image to its first uploaded photo.
update public.portfolio_projects set cover_image = '/portfolio/best-promotions/1001117034.png' where slug = 'best-promotions';
update public.portfolio_projects set cover_image = '/portfolio/book-covers/1001117706.png' where slug = 'various-clients-book-cover';
update public.portfolio_projects set cover_image = '/portfolio/jwiss-by-mijesty/1001117268.png' where slug = 'jwiss-by-mijesty';
update public.portfolio_projects set cover_image = '/portfolio/logos/1001120527.png' where slug = 'various-clients-logos';
update public.portfolio_projects set cover_image = '/portfolio/mummy-alaba/1001146888.png' where slug = 'mummy-alaba';
update public.portfolio_projects set cover_image = '/portfolio/omas-hairs-essentials/1001146868.png' where slug = 'omas-hairs-essentials';
update public.portfolio_projects set cover_image = '/portfolio/trays-n-dishes/1001117741.png' where slug = 'trays-n-dishes';
update public.portfolio_projects set cover_image = '/portfolio/universal-climate-initiative/1001117209.png' where slug = 'universal-climate-initiative';
update public.portfolio_projects set cover_image = '/portfolio/wedding-invitations/1001117622.png' where slug = 'various-clients-wedding-iv';
update public.portfolio_projects set cover_image = '/portfolio/zinny-aesthetics/1001117382.png' where slug = 'zinny-aesthetics';