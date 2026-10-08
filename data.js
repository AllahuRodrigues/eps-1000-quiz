/* EPS 1000 Natural Disasters: Midterm 1 question bank.
   Built from lectures 1–14 (slides, key points, transcripts), class notes, HW1–4 and the readings.
   cards     = short flashcards (term / fact)
   questions = exam-style short-answer questions with model answers.
   keys      = key ideas a full-credit answer should mention ("a|b" = either wording counts). */
window.EPS = (function () {
  const topics = [
    { id: 'energy',    short: 'Energy & physics',      name: 'L1–3 · Energy sources & basic physics' },
    { id: 'mobile',    short: 'Mobile Earth',          name: 'L4 · Our mobile planet (convection, water, planets)' },
    { id: 'plates',    short: 'Plate tectonics',       name: 'L5–6 · Plate tectonics, boundaries & evidence' },
    { id: 'mantle',    short: 'Viscosity & isostasy',  name: 'L7 · Viscosity, convection, rheology & isostasy' },
    { id: 'faults',    short: 'Faults & rebound',      name: 'L8 · Earthquakes, faults & elastic rebound' },
    { id: 'waves',     short: 'Seismic waves',         name: 'L8–9, 11 · Seismic waves, seismograms & location' },
    { id: 'size',      short: 'Magnitude & damage',    name: 'L9–10 · Magnitude, intensity & building damage' },
    { id: 'cases',     short: 'Famous quakes',         name: 'L10 · Boundary types & famous earthquakes' },
    { id: 'gaps',      short: 'Stick-slip & gaps',     name: 'L11 · Stick-slip, slider block & seismic gaps' },
    { id: 'melting',   short: 'Volcanic settings',     name: 'L12 · Volcanic settings & why the mantle melts' },
    { id: 'magma',     short: 'Magma properties',      name: 'L13 · Silicates, Bowen, felsic vs mafic, viscosity, volatiles' },
    { id: 'eruptions', short: 'Eruptions & volcanoes', name: 'L14 · Eruption styles, flows & volcano types' }
  ];

  const cards = [], questions = [];
  const hash = s => { let h = 0; for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
  const C = (t, front, back) => cards.push({ id: 'c-' + t + '-' + hash(front), topic: t, front, back });
  const Q = (t, q, a, keys) => questions.push({ id: 'q-' + t + '-' + hash(q), topic: t, q, a, keys: keys || [] });

  /* ======================= L1–3 ENERGY & PHYSICS ======================= */
  C('energy', 'What are the 3 categories of natural disasters and their energy sources?', '- **Geological** (earthquakes, volcanoes, tsunami) ← **Earth\'s interior heat**\n- **Meteorological** (hurricanes, storms, floods) ← **the Sun**\n- **Cosmological** (asteroid impacts) ← **planetary orbits** (orbital KE + gravitational PE)');
  C('energy', 'Earth\'s total internal heat output', '**~46 TW** (4.6 × 10¹³ W). About **50% primordial heat** + **50% radioactive decay**.');
  C('energy', 'Primordial heat', 'Heat left over from **Earth\'s formation**: colliding bodies during accretion turned gravitational PE → KE → **heat** on impact.');
  C('energy', 'Radiogenic heat', 'Heat from **radioactive decay** of U → Pb, Th → Pb, K → Ar; emitted α, β, γ particles are absorbed and become heat.');
  C('energy', 'Solar constant & total solar power', '**1,360 W/m²**; total ≈ **170,000 TW**, about **4,000×** Earth\'s internal heat.');
  C('energy', 'Fate of incoming sunlight', '~30% reflected (albedo) · ~50% absorbed as heat · ~20% evaporates water · ~0.02% photosynthesis.');
  C('energy', 'What powers the Sun?', '**Nuclear fusion of hydrogen into helium** (proton–proton reaction), ignited when gravitational collapse heated the core above 10⁷ K.');
  C('energy', 'Three lines of evidence for the Big Bang', '1. **Dark night sky** (finite universe & age)\n2. **Galactic redshift** (Hubble/Doppler: universe expanding)\n3. **Cosmic microwave background** (universe is 3 K, not 0 K: residual heat)');
  C('energy', 'How do energy sources interact? (example)', '**Tides**: the Moon\'s (and Sun\'s) gravity raises bulges in oceans and the solid Earth; orbital/rotational energy goes into moving water and a little heat. On **Io**, tidal heating powers volcanoes.');
  C('energy', 'Oil furnace: original energy source?', '**The Sun.** Fossil fuels are buried organisms whose energy came from **photosynthesis** (the class trick question).');
  C('energy', 'Differentiation', 'Early in Earth\'s history (first tens of Myr) dense **iron sank to form the core**, leaving the mantle and crust on top.');
  C('energy', 'F = ma; unit of force', 'Newton\'s 2nd law. **Newton (N) = kg·m/s²**. An apple weighs ~1 N.');
  C('energy', 'Work; unit of work/energy', 'Work = **force × distance moved** = energy transferred by a force. **Joule (J) = N·m = kg·m²/s²**.');
  C('energy', 'Power; unit', 'Rate of energy transfer. **Watt (W) = J/s**. (1 kWh = 3.6 × 10⁶ J.)');
  C('energy', 'Potential vs. kinetic energy', '**PE** = stored energy (gravitational PE = mgh). **KE** = energy of motion (½mv²); heat is molecular KE. They interconvert; energy is conserved.');
  C('energy', 'Sensible vs. latent heat', '**Sensible**: changes temperature. **Latent**: changes **phase** (melting, evaporating) at **constant temperature**; released on freezing/condensing.');
  C('energy', 'Heat capacity', 'Amount of heat needed to raise an object\'s temperature by 1 degree (a sensible-heat property). Water\'s is very high.');
  C('energy', 'MKS units', '**Meters, kilograms, seconds**: the units used in scientific calculations.');
  C('energy', 'Precision rule', 'A result can\'t be more precise than the **least precise input** (tsunami speed ≈ 230 m/s, not 232.282156).');
  C('energy', 'Why does "Earth = rock sphere" underestimate Earth\'s mass?', 'The **core is iron** (much denser than rock) and deep rock is **compressed** by pressure. (Estimate 3.6 × 10²⁴ vs. real 6 × 10²⁴ kg.)');

  Q('energy', 'What are the three major energy sources for natural disasters? Which type of disaster does each power?',
    '- **Earth\'s internal heat** → **geological** disasters (earthquakes, volcanoes, tsunami).\n- **The Sun** (fusion of H into He) → **meteorological** disasters (hurricanes, storms, floods, heat waves).\n- **Planetary orbits** (orbital kinetic + gravitational potential energy) → **cosmological** disasters (asteroid/comet impacts).\n- All three ultimately trace back to the **Big Bang** and the gravitational collapse that formed the solar system.',
    ['interior|internal|inside', 'sun|solar', 'orbit', 'geological', 'meteorological', 'cosmological']);
  Q('energy', 'Where does the heat in Earth\'s interior come from?',
    'About 46 TW, split roughly **50/50**:\n- **Primordial heat**: during accretion, colliding bodies converted gravitational potential energy to kinetic energy and then to **heat** on impact; Earth is still cooling off.\n- **Radiogenic heat**: **radioactive decay** of uranium, thorium and potassium releases particles whose energy is absorbed as heat.',
    ['primordial|left over|formation', 'radioactive|decay', 'uranium|thorium|potassium', 'accretion|collision|impact']);
  Q('energy', 'Explain how all three disaster energy sources ultimately come from the Big Bang and solar-system formation.',
    'All matter and energy originated in the Big Bang (~14 Gyr ago). ~4.6 Gyr ago a molecular cloud **collapsed under gravity**, converting **gravitational potential energy into kinetic energy and heat**:\n- the hot, dense core ignited **fusion** → the **Sun** (meteorological energy);\n- the leftover disk formed planets that kept **orbital energy** (cosmological energy);\n- colliding planetesimals turned orbital energy into **heat** inside the young Earth (primordial heat), and the radioactive elements were made in earlier stars/supernovae (radiogenic heat) → geological energy.',
    ['gravit', 'collapse', 'potential', 'kinetic', 'heat', 'fusion']);
  Q('energy', 'Use ocean tides to explain how different energy sources for disasters can interact.',
    'Tides are raised by the **gravitational pull of the Moon** (and Sun) on the oceans and the solid Earth, producing tidal bulges. As Earth rotates through the bulges, **orbital/rotational energy** is transferred into moving ocean water and slightly **heating** the solid Earth. On Earth that heat is negligible compared with primordial and radiogenic heat, but on Jupiter\'s moon **Io**, tidal heating is strong enough to power **volcanoes**: orbital energy becomes "geological" energy.',
    ['moon', 'gravit', 'orbit|rotation', 'bulge', 'io|heat']);
  Q('energy', 'A house is heated by an oil furnace. What is the ORIGINAL energy source, and why is this a "trick" question?',
    'The **Sun**. Oil is a **fossil fuel** made of ancient organisms (plants/plankton) whose energy was captured by **photosynthesis**. Earth\'s heat and pressure only transformed that buried material into oil. Students often say "Earth\'s interior" because oil comes out of the ground, but you must trace the energy **all the way back**.',
    ['sun', 'photosynthesis', 'fossil|organic', 'trace|original|ultimate']);
  Q('energy', 'What is the original energy source for (a) a geyser like Old Faithful, (b) a hydroelectric dam, (c) a windmill, and (d) a nuclear power plant?',
    '- **(a) Geyser:** Earth\'s **interior heat** heats groundwater (the water is just the working fluid).\n- **(b) Hydroelectric dam:** the **Sun** evaporates water, which falls as rain/snow at high elevation and flows downhill (topography from plate tectonics helps).\n- **(c) Windmill:** the **Sun** heats the surface unevenly → atmospheric convection → wind.\n- **(d) Nuclear plant:** uranium made in **stars/supernovae** and mined from Earth; **not the Sun**.',
    ['interior', 'sun', 'evaporat', 'convection|uneven', 'supernova|star']);
  Q('energy', 'Compare the energy Earth receives from the Sun with the heat coming out of its interior. Why is this difference relevant to disasters?',
    'Solar input is ~**170,000 TW** vs. ~**46 TW** from the interior: the Sun supplies about **4,000×** more power. Solar energy drives the vigorous, fast-moving atmosphere and oceans (meteorological disasters: storms, hurricanes, floods), while the much smaller interior heat drives slow mantle convection and plate tectonics (earthquakes, volcanoes).',
    ['170,000|170000|4000|4,000', '46', 'atmosphere|weather|storm', 'mantle|plate']);
  Q('energy', 'Define work, energy, force and power, and give the MKS unit of each.',
    '- **Force**: a push or pull; F = ma; unit **newton** (N = kg·m/s²).\n- **Work**: energy transferred by a force = force × distance; unit **joule** (J = N·m).\n- **Energy**: the capacity to do work (or anything that can be turned into heat); unit **joule**.\n- **Power**: rate of energy transfer; unit **watt** (W = J/s).',
    ['newton', 'joule', 'watt', 'distance', 'rate', 'f = ma|f=ma|mass']);
  Q('energy', 'What is the difference between latent heat and sensible heat? Give an example of each.',
    '- **Sensible heat** changes an object\'s **temperature** (heating a pot of water from 20 °C to 80 °C).\n- **Latent heat** changes its **phase** without changing temperature (ice melting at 0 °C, water evaporating). The same latent heat is **released** when vapor condenses or water freezes.',
    ['temperature', 'phase|state', 'constant|without', 'melt|evaporat|boil', 'condens|freez']);
  Q('energy', 'What is heat capacity, and why does water\'s high heat capacity matter for Earth?',
    'Heat capacity is the amount of heat needed to raise an object\'s temperature by 1 degree. Water has a very high heat capacity, so the oceans can **store huge amounts of heat** with only small temperature changes. That moderates climate but also gives the ocean a large energy reservoir that feeds storms and hurricanes.',
    ['1 degree|one degree|raise', 'store', 'ocean', 'storm|hurricane']);
  Q('energy', 'What does conservation of energy mean? A dropped apple stops on the table. Where did its energy go?',
    'Energy is never created or destroyed; it only changes form (potential ↔ kinetic ↔ heat). The lifted apple has gravitational PE, which becomes KE as it falls; when it thunks onto the table its KE goes into **deforming/bruising the apple** (and the table) and a little **heat** and sound.',
    ['created|destroyed', 'potential', 'kinetic', 'heat', 'deform|bruis']);
  Q('energy', 'Why do scientists use MKS units and care about significant figures?',
    'MKS (meters, kilograms, seconds) keeps calculations consistent: tracking units tells you how to combine quantities and catches errors. A calculated result can\'t be more precise than the least precise input, so reporting 232.282156 m/s for a tsunami speed when depth is known to ~2 figures is false precision; ~230 m/s is right.',
    ['meter', 'kilogram', 'second', 'precise|precision', 'least']);
  Q('energy', 'Estimating Earth\'s mass as a sphere of rock gives ~3.6 × 10²⁴ kg, but the real value is 6 × 10²⁴ kg. Why is the estimate too low?',
    'The assumption that Earth is all rock fails: Earth **differentiated**, and its **core is iron**, much denser than rock. Rocks deep in the mantle are also **compressed** by enormous pressure, making them denser than surface rock. Both make the true average density higher than ~3,300 kg/m³.',
    ['iron', 'core', 'dens', 'pressure|compress']);
  Q('energy', 'How does the Sun produce energy, and why will it eventually run out?',
    'Gravitational collapse heated the solar core above ~10⁷ K, hot enough for **nuclear fusion of hydrogen into helium**, which releases energy and halts further collapse. H–He fusion is slow; the Sun will use up its hydrogen in ~10 billion years (it is ~halfway), then collapse, reheat and fuse heavier elements.',
    ['fusion', 'hydrogen', 'helium', 'billion']);

  /* ======================= L4 MOBILE EARTH ======================= */
  C('mobile', 'Thermal convection in one line', '"Hot stuff rises, cold stuff falls." Heated material expands → less dense → buoyant → rises; cooled material → denser → sinks.');
  C('mobile', 'Convection gives Earth two mobile layers', '**Mobile surface** (mantle convection → plate tectonics) and **mobile atmosphere** (atmospheric circulation). This mobility drives disasters.');
  C('mobile', 'Mantle heat output vs. total', 'Total interior 46 TW; ~8 TW made in the crust, so **~38 TW** comes out of the mantle, **concentrated in up- and downwellings**.');
  C('mobile', 'Speed of mantle convection', '**~1–10 cm/yr**, about as fast as fingernails grow.');
  C('mobile', 'Why does Earth spin create 3 atmospheric cells per hemisphere?', 'The **Coriolis effect** breaks the single equator-to-pole cell into the **Hadley, Ferrel and Polar** cells.');
  C('mobile', 'Water\'s special energy properties', '**High heat capacity** + **high latent heat** of melting and especially vaporization/condensation; ice is **less dense** than liquid water. Water "holds" a lot of energy.');
  C('mobile', 'Fraction of solar power taken up by water', '~**23%** of solar input goes into evaporating water. Condensation later releases it and powers storms and hurricanes.');
  C('mobile', 'Why is Earth more "mobile" than Mars, Mercury, the Moon?', 'Earth is the **largest terrestrial planet**, so it **retains heat** and its mantle still convects. Small bodies cooled quickly.');
  C('mobile', 'Venus vs. Earth', 'Same size, but **too close to the Sun** → **runaway greenhouse** (470 °C), lost its water → no plate tectonics(?), no life; spins **slowly and backward** → no cyclonic weather.');
  C('mobile', 'Mars vs. Earth', 'Too small and too cold: water frozen in polar caps and permafrost, no plate tectonics now (maybe in the past); spins like Earth → huge **dust storms**.');
  C('mobile', 'Habitable zone', 'Orbital distance where it\'s neither too hot nor too cold for **liquid water**, which affects weather, plate tectonics and life.');
  C('mobile', 'Effects of Earth\'s fast rotation', 'Coriolis effect → **cyclonic weather**, **jet streams**, ocean gyres/Gulf Stream; also **core flow → magnetic field**.');

  Q('mobile', 'Explain how thermal convection gives Earth both a mobile surface and a mobile atmosphere.',
    'Convection: material heated from below **expands, becomes less dense and rises**; material cooled at the top **becomes denser and sinks**, setting up circulating cells.\n- **Mantle**: heated by the core and radioactive decay, the solid mantle convects slowly (1–10 cm/yr); the cold top layer forms plates that move: **plate tectonics** (earthquakes, volcanoes).\n- **Atmosphere**: the Sun heats the equator more than the poles; air convects, carrying heat poleward: **atmospheric circulation** (weather, storms).\nConvection turns heat into motion, and that motion drives disasters.',
    ['less dense|density', 'rise', 'sink', 'mantle', 'plate', 'atmospher', 'sun|solar']);
  Q('mobile', 'Why does water make Earth\'s natural disasters more energetic?',
    '- **High heat capacity**: oceans store vast amounts of heat.\n- **High latent heat**: evaporation absorbs ~23% of solar power and stores it in water vapor; when the vapor **condenses** in rising air it **releases latent heat**, warming the air and making it more buoyant, which strengthens the updraft. That is the engine of thunderstorms and **hurricanes**.\n- Water also amplifies convection through the hydrologic cycle (rivers, erosion, floods) and helps plate tectonics.',
    ['heat capacity', 'latent', 'evaporat', 'condens', 'release', 'hurricane|storm']);
  Q('mobile', 'Why does Earth have active plate tectonics while Mars, Mercury and the Moon do not?',
    '**Size.** Earth is the largest terrestrial planet, so it has retained much of its internal (primordial + radiogenic) heat, keeping its mantle hot enough to **convect** and break the lithosphere into moving plates. Small bodies lose heat much faster (more surface area relative to volume), so their interiors cooled and convection became weak. **Liquid water** on Earth (from its orbit) also helps plate tectonics.',
    ['size|large|big|small', 'heat|cool', 'convect', 'water']);
  Q('mobile', 'Explain why Venus, though about Earth\'s size, is so different.',
    'Venus is **closer to the Sun**: its water evaporated and, because water vapor is a greenhouse gas, the heating fed back on itself: a **runaway greenhouse** (~470 °C surface). Sunlight split H₂O and the hydrogen escaped, so Venus has **almost no water**, no life, and apparently no plate tectonics. It also **spins very slowly (and backward)**, so it lacks Earth-style cyclonic weather.',
    ['sun|closer|hot', 'runaway', 'greenhouse', 'water', 'spin|rotat']);
  Q('mobile', 'Why are Earth\'s orbital position and rotation rate important for disasters?',
    '- **Orbit**: Earth is in the **habitable zone**, so it has **liquid water**, which drives weather and hurricanes (latent heat), the hydrologic cycle, and helps plate tectonics. Too close = Venus\'s runaway greenhouse; too far = frozen Mars.\n- **Rotation**: Earth spins fast, so the **Coriolis effect** splits atmospheric circulation into 3 cells per hemisphere, creates jet streams, and makes storms rotate (cyclones/hurricanes). Rotation also drives core flow → magnetic field.',
    ['habitable', 'liquid water', 'coriolis', 'cell|jet', 'cyclon|hurricane|rotate']);
  Q('mobile', 'How does Earth\'s rotation change atmospheric convection?',
    'Without rotation, the Sun-heated equator would drive one big convection cell per hemisphere (rise at the equator, sink at the poles). Earth\'s fast spin creates the **Coriolis effect**, which deflects moving air and breaks it into **three cells per hemisphere**: **Hadley** (tropical), **Ferrel** (mid-latitude), **Polar**. That produces the trade winds, westerlies and easterlies at the surface and **jet streams** aloft, and it makes storms rotate.',
    ['coriolis', 'three|3', 'hadley', 'ferrel', 'polar', 'jet']);
  Q('mobile', 'Why is mantle energy release concentrated in particular places rather than spread evenly over the globe? Why does that matter?',
    'Convection focuses heat transport into **upwellings (plumes, ridges)** and **downwellings (subducting slabs)**. So the ~38 TW of mantle heat is released mainly along **plate boundaries and hotspots**, which is why earthquakes, volcanoes and mountain building are concentrated in narrow zones, and why plate maps are hazard maps.',
    ['upwelling|plume', 'downwelling|slab', 'boundar', 'concentrat|focus']);
  Q('mobile', 'Describe the mantle: what is it made of, what state is it in, how is it heated, and how fast does it move?',
    'The mantle is ~2,900 km of **solid** silicate rock between crust and core (~80% of Earth\'s volume). It is heated by **primordial heat** and **radioactive decay** (and from below by the core). Though solid, it **flows** very slowly by convection (~1–10 cm/yr, fingernail speed): rock near the surface cools and sinks, rock near the core heats and rises.',
    ['solid', '2900|2,900', 'radioactive', 'primordial', 'cm/yr|cm per year|fingernail']);

  /* ======================= L5–6 PLATE TECTONICS ======================= */
  C('plates', 'Plate tectonics is the surface manifestation of…', '**Mantle convection.** Plates are the cold top boundary layer of the convecting mantle.');
  C('plates', 'Lithosphere', '**Crust + uppermost mantle.** Cold → strong and stiff, resistant to flow; broken into **plates**.');
  C('plates', 'Asthenosphere', 'Mantle beneath the lithosphere: solid but weaker, flows relatively easily.');
  C('plates', 'Two observations proving the solid mantle can flow', '**Isostasy** (it CAN flow) and **post-glacial rebound** (HOW EASILY it flows, i.e., its viscosity).');
  C('plates', 'Post-glacial rebound', 'Land pushed down by ice-age ice sheets (Scandinavia, Canada) is **still slowly rising** thousands of years after the ice melted, like memory foam. The rate gives the mantle viscosity.');
  C('plates', 'What drives plate motion?', '**Slab pull**: old, cold, dense lithosphere sinks at subduction zones and drags the plate behind it. Ridges are **passive**.');
  C('plates', 'Plate tectonic cycle duration; oldest seafloor', '~**200–250 Myr**; oldest seafloor ~**200 Myr** (vs. ~4 Byr continental rocks).');
  C('plates', 'Three plate boundary types', '**Divergent** (apart; ridges), **convergent** (together; subduction/collision), **transform** (slide past; San Andreas).');
  C('plates', 'Three kinds of convergent boundary', '**Ocean–ocean** (older, denser plate subducts; island arc), **ocean–continent** (oceanic plate subducts; continental arc), **continent–continent** (collision → mountains; no subduction).');
  C('plates', 'Earthquake size by boundary', '**Divergent = smallest · Transform = middle · Convergent = largest** (subduction zones: M9+).');
  C('plates', '8 lines of evidence for plate tectonics', 'Continent shapes · magnetic stripes · paleomagnetism · hotspot tracks · earthquake/volcano distribution · deep earthquakes · seafloor age/depth/sediment · GPS satellite measurements.');
  C('plates', 'Magnetic stripes', 'Bands of normal/reversed magnetization **parallel** to and **symmetric** about ridges, matching the reversal timescale → **seafloor spreading** ("smoking gun").');
  C('plates', 'Paleomagnetism', 'Rocks freeze in the field\'s **inclination** → the **latitude** where they formed (not longitude). Dated rocks map continents\' past positions.');
  C('plates', 'Hotspot track evidence', 'Volcanic islands get **older away from the active hotspot** (Hawaii → Midway → Emperor seamounts): the plate moves over a fixed plume.');
  C('plates', 'Deep earthquakes (Wadati–Benioff zones)', 'Quakes down to **~700 km** along dipping zones under trenches. Only cold, brittle **subducting slabs** can break that deep: direct evidence of subduction.');
  C('plates', 'Why does the ocean get deeper away from ridges?', 'Lithosphere **cools, contracts, becomes denser** with age → sinks lower by **isostasy**.');
  C('plates', 'Why was Wegener rejected?', 'No **mechanism**: continents couldn\'t plow through stiff rock. Fix: continents **ride inside plates**.');
  C('plates', 'Fit of the continents: which contour?', 'The **~1,800 m depth contour** (edge of the continental shelf = true edge of continental crust).');
  C('plates', 'Why don\'t continents subduct?', 'Continental crust is **felsic, low density, buoyant**: too light to sink into the mantle.');

  Q('plates', 'The mantle is solid rock. What two observations show that it can flow, and what does each tell us?',
    '- **Isostasy**: continents and mountains "float" in the denser mantle with deep low-density roots (Himalayan gravity surveys). That balance is only possible if the mantle can flow out of the way, so the mantle **can** flow.\n- **Post-glacial rebound**: land pushed down by kilometers of ice during the last ice age (Scandinavia, North America) is **still rising** ~20,000 years later, like memory foam recovering. The rate of rebound tells us **how easily** it flows, i.e., the mantle\'s **viscosity** (~10²¹ Pa·s).',
    ['isostasy', 'float|root', 'rebound|glacial', 'ice', 'viscosity|how easily']);
  Q('plates', 'What does it mean that "plate tectonics is the surface manifestation of mantle convection"?',
    'The mantle convects to get rid of internal heat: hot rock rises, cold rock sinks. The **lithosphere** is the cold, stiff top boundary layer of that convecting system. Where it is old and cold enough it **sinks** back into the mantle at subduction zones (the cold downwellings of convection), **pulling the plate** along; at ridges, mantle wells up to fill the gap. Plate motion is therefore just what convection looks like at the surface.',
    ['convect', 'heat', 'cold', 'sink|subduct', 'pull', 'ridge|upwell']);
  Q('plates', 'What is the lithosphere, and why does it behave as rigid plates over a mantle that flows?',
    'The lithosphere is the **crust plus the uppermost mantle**. It is **cold**, and mantle rock\'s viscosity depends strongly on **temperature**, so cold rock is far stiffer and stronger (molasses in winter). It resists flow and instead **breaks** (brittle → earthquakes), behaving as rigid plates riding on the hotter, weaker, flowing mantle (asthenosphere) below.',
    ['crust', 'upper|top', 'cold', 'temperature', 'stiff|strong|rigid', 'asthenosphere|flow']);
  Q('plates', 'Describe the plate tectonic cycle from the birth to the death of an oceanic plate.',
    '1. At a **mid-ocean ridge**, plates move apart; mantle rises to fill the gap, **melts by decompression**, and forms new **oceanic crust**.\n2. The plate moves away (**seafloor spreading**), possibly carrying a continent.\n3. It **cools, thickens and becomes denser**, sitting deeper.\n4. When old and dense enough, it **sinks into the mantle at a subduction zone**; the sinking slab **pulls** the rest of the plate.\n5. The cycle takes ~200–250 Myr, so oceanic crust is always young (≤ ~200 Myr).',
    ['ridge|spreading', 'decompression|melt', 'cool', 'dens', 'subduct', 'pull']);
  Q('plates', 'What drives plate motion?',
    'Mainly **slab pull**: oceanic lithosphere becomes cold and dense as it ages, so at subduction zones it **sinks into the mantle under gravity** and drags the attached plate behind it. Mid-ocean ridges are **passive**: plates are pulled apart and mantle rises to fill the gap (conservation of mass). This is mantle convection with the slabs as cold downwellings.',
    ['slab', 'pull|drag', 'dens', 'gravity', 'passive', 'convection']);
  Q('plates', 'Name the three types of plate boundaries. For each, describe the motion and give an example.',
    '- **Divergent**: plates move **apart**, new lithosphere forms (Mid-Atlantic Ridge/Iceland, East Pacific Rise, East African Rift).\n- **Convergent**: plates move **together**; one subducts (Andes, Cascadia, Japan, Aleutians) or continents collide (Himalaya).\n- **Transform**: plates **slide past** each other horizontally (San Andreas, North Anatolian Fault).',
    ['divergent', 'convergent', 'transform', 'apart', 'together', 'slide|past']);
  Q('plates', 'Describe the three types of convergent boundaries and what happens at each.',
    '- **Ocean–ocean**: the **older, colder, denser** oceanic plate subducts → volcanic **island arc** (Marianas, Aleutians, Japan).\n- **Ocean–continent**: the **oceanic** plate subducts beneath the buoyant continent → **continental arc** (Andes, Cascades).\n- **Continent–continent**: both are too buoyant to subduct → **collision**, crustal thickening, mountain building (Himalaya); large earthquakes but no subduction-zone volcanism.\nSubduction zones (the first two) are the most dangerous boundaries.',
    ['ocean-ocean|ocean–ocean|ocean ocean', 'ocean-continent|ocean–continent|ocean continent', 'continent-continent|continent–continent|collision', 'denser|older', 'buoyant', 'himalaya|mountain']);
  Q('plates', 'Why do convergent boundaries produce the largest earthquakes, divergent the smallest, and transforms in between?',
    'Earthquake size depends on how much elastic strain can build before failure, which depends on fault **area**, rock **strength**, and **stress state**.\n- **Divergent**: lithosphere is **hot and thin** (small frictional contact) and in **tension**; rocks are weak in tension, so they fail early → **small** quakes.\n- **Transform**: moderate temperature/thickness and contact area → **intermediate**.\n- **Convergent (subduction)**: plates are **cold and thick**, the dipping contact is **huge**, and rocks are in **compression** (strong) → enormous stored energy → **largest (M9+)**.',
    ['hot', 'thin', 'tension', 'cold', 'thick', 'compression', 'contact|area']);
  Q('plates', 'Explain how magnetic stripes on the seafloor provide evidence for seafloor spreading.',
    'Magma erupts at the ridge; as the lava cools, its magnetic minerals **lock in the direction of Earth\'s magnetic field**. The field **reverses** every ~10,000–100,000 years. As new crust moves away on **both sides** like two conveyor belts, each polarity period leaves a pair of stripes. The observed stripes are **parallel to the ridge**, **symmetric** on either side, and match the **dated reversal timescale**, which only makes sense if new seafloor is continuously created at the ridge and spreads outward.',
    ['cool', 'magnetic|field', 'revers', 'symmetric', 'parallel', 'conveyor|spread']);
  Q('plates', 'How does paleomagnetism show that continents have moved?',
    'When rocks form, magnetic minerals align with Earth\'s field and freeze in its **inclination**: horizontal at the equator, steep near the poles. So a rock records the **latitude where it formed**. If a rock\'s frozen field doesn\'t match today\'s field at its location, it must have formed elsewhere and moved. Dating rocks (radioactive decay) lets us track each continent\'s latitude through time (Pangaea ~220 Myr ago → today). It gives **latitude, not longitude**.',
    ['inclination|angle', 'latitude', 'freeze|lock|record', 'date|dated|age', 'moved']);
  Q('plates', 'How do hotspot tracks provide evidence for plate motion?',
    'A hotspot is a mantle plume **anchored in the deep mantle**, roughly fixed. As the plate moves over it, the plume punches through to make a volcano, which is then carried away while a new one forms. The result is a chain of volcanic islands that get **progressively older** away from the active one (Hawaii → Midway ~27 Myr → bend → Emperor seamounts ~65+ Myr). The age progression gives the plate\'s **direction and speed**.',
    ['fixed|stationary|anchored', 'plume', 'older', 'chain', 'plate moves|moves over']);
  Q('plates', 'Why are deep earthquakes (down to ~700 km) strong evidence for subduction?',
    'Hot mantle rock flows rather than breaking, so earthquakes shouldn\'t happen at great depth in normal mantle. But deep quakes occur in **dipping zones beneath trenches** (Wadati–Benioff zones), exactly where plate tectonics predicts **cold, brittle oceanic slabs** sinking into the mantle. Only a cold subducting slab can host earthquakes that deep: direct evidence of subduction.',
    ['700', 'cold', 'brittle', 'slab', 'trench|dipping', 'subduct']);
  Q('plates', 'Explain how seafloor age, depth and sediment thickness support plate tectonics.',
    '- **Age**: youngest at ridges, older moving away (symmetrically), maximum ~200 Myr. Ocean basins are young and continuously recycled.\n- **Depth**: shallow at ridges, deeper with age, because the lithosphere **cools, contracts and becomes denser**, sinking lower by **isostasy**.\n- **Sediment**: thin at ridges (new crust), thicker toward trenches (more time to accumulate).\nAll three show crust is created at ridges, ages as it moves away, and is destroyed at subduction zones.',
    ['young', 'old', 'deep', 'cool', 'isostasy|dens', 'sediment']);
  Q('plates', 'Why is the oldest seafloor only ~200 Myr old while continental rocks are ~4 billion years old?',
    'Oceanic lithosphere is constantly **created at ridges and destroyed at subduction zones**: once it is old, cold and dense enough, it sinks back into the mantle, on a ~200–250 Myr cycle. Continental crust is **felsic and low-density (buoyant)**, so it **can\'t subduct**; it stays at the surface and preserves very old rocks.',
    ['recycl|destroy|subduct', 'ridge|created', 'dens', 'buoyant|light|low density', 'continent']);
  Q('plates', 'Why was Wegener\'s continental drift rejected, and what changed to make plate tectonics accepted?',
    'Wegener (1915) had good evidence (fitting coastlines, matching fossils and rocks) but **no mechanism**: geologists couldn\'t see how continents could **plow through solid rock**. After WWII, **ocean-floor surveys** (bathymetry: ridges, trenches, fracture zones; **magnetic stripes**) and **global seismic networks** (built to detect nuclear tests) revealed seafloor spreading, subduction, and earthquake belts. The key insight: continents don\'t plow through anything; they **ride along inside moving plates**, driven by mantle convection.',
    ['mechanism', 'plow|through', 'magnetic', 'seafloor|ocean floor', 'ride|inside|within']);
  Q('plates', 'How can GPS satellite measurements confirm plate tectonics?',
    'Precise GPS/GNSS stations (not phone GPS) are measured repeatedly over years; they move by a few centimeters per year (~1–10 cm/yr) in directions consistent with plate motion. It is a **direct, present-day measurement** of plates moving, which wasn\'t available when the theory was developed.',
    ['gps|satellite', 'cm', 'direct', 'year']);
  Q('plates', 'Why is plate tectonics important for forecasting and preparing for earthquakes and volcanoes?',
    'It tells us **where** hazards occur (most earthquakes and volcanoes are on plate boundaries, so plate maps are hazard maps), **what kind and how big** (boundary type sets fault type, maximum earthquake size and volcano style: subduction zones = largest quakes, tsunamis and explosive volcanoes), and **how often** in the long term (plate speeds give strain accumulation rates). That guides building codes, warning systems and monitoring, though it can\'t predict exact timing.',
    ['where', 'boundar', 'type|kind', 'subduction', 'building|warning|prepare']);
  Q('plates', 'Why are subduction zones the most dangerous type of plate boundary?',
    'They host the **largest earthquakes** (M9+ on huge, cold, locked megathrusts in compression), the **deepest earthquakes**, the **deadliest tsunamis** (seafloor uplift during thrusting), and the **most explosive volcanoes** (water from the slab → flux melting → felsic, volatile-rich magma). The Pacific "Ring of Fire" concentrates most of them.',
    ['largest|biggest', 'tsunami', 'explosive', 'water', 'ring of fire|pacific']);
  Q('plates', 'Explain why ocean–continent subduction occurs but continent–continent collisions don\'t subduct.',
    'Subduction requires a plate denser than the mantle beneath. Old **oceanic** lithosphere (mafic crust + cold mantle) becomes dense enough to sink. **Continental** crust is **felsic and low-density**, so it is too buoyant to sink; when two continents meet, neither goes down: they crumple, thicken and build mountains (Himalaya).',
    ['dens', 'oceanic', 'buoyant|light', 'felsic', 'mountain|himalaya']);

  /* ======================= L7 MANTLE: VISCOSITY, RHEOLOGY, ISOSTASY ======================= */
  C('mantle', 'Viscosity', 'A fluid\'s **resistance to flow** ("stickiness"). Units: **pascal-seconds (Pa·s)** = N·s/m².');
  C('mantle', 'Viscosities to remember', 'Air ~10⁻⁵ · water ~10⁻³ · corn syrup ~1 · molasses ~5 · **peanut butter ~250** · Silly Putty ~10⁵ · **mantle ~10²¹ Pa·s**.');
  C('mantle', 'Fluid vs. liquid', 'The mantle is a **fluid** (it flows) but a **solid**, not a liquid. Never call the mantle liquid!');
  C('mantle', 'Why does a rock sink slower in syrup than water?', 'Gravity pulls it down; **viscous drag** resists, and drag grows with viscosity → **lower terminal velocity** in more viscous fluid.');
  C('mantle', 'What controls whether convection happens?', 'Bigger **temperature difference** (+), bigger **size** (+), thermal properties, higher **viscosity** (−).');
  C('mantle', 'Why does the super-viscous mantle still convect?', 'The **enormous temperature difference** (thousands of °C at the core vs. ~10 °C at the surface) and huge size overwhelm the high viscosity.');
  C('mantle', 'Lava lamp: where the analogy breaks', '(1) two different materials (mantle = mostly the same rock); (2) **no plates**: the lamp\'s top isn\'t part of the convection.');
  C('mantle', 'Rheology', 'How materials **deform**.');
  C('mantle', 'Three deformation types (Silly Putty)', '**Viscous** (slow pull → flows; mantle convection) · **Brittle** (yank fast → snaps; lithosphere earthquakes) · **Elastic** (bounce → springs back; seismic waves).');
  C('mantle', 'Two controls on rheology', '**Strain rate** (slow → viscous, fast → brittle/elastic) and **temperature** (cold → stiff/brittle, hot → flows). Temperature dominates in the mantle.');
  C('mantle', 'Isostasy', 'Less-dense crust "floats" on denser mantle, sinking until it displaces its own weight. Mountains have **deep roots**.');
  C('mantle', 'Iceberg: fraction below water', '~**90%** (920/1000 ≈ 92%) because ice is only slightly less dense than water. Fraction submerged = ρ_ice/ρ_water.');
  C('mantle', 'Crust and mantle densities', 'Continental crust **~2,700 kg/m³**; mantle **~3,300 kg/m³**; ice ~920; water ~1,000.');

  Q('mantle', 'Define viscosity and give its units. Why does a rock fall more slowly through corn syrup than through water?',
    'Viscosity is a fluid\'s **resistance to flow** (stickiness), measured in **pascal-seconds (Pa·s)**. A falling rock feels **gravity** pulling it down (it\'s denser than the fluid) and a **viscous drag force** resisting its motion; the drag is larger in a more viscous fluid. The rock quickly reaches a **terminal velocity** where drag balances gravity, and in a high-viscosity fluid that balance happens at a much **lower speed**. It still sinks eventually because it is denser.',
    ['resistance to flow|resist', 'pa', 'gravity', 'drag|viscous force', 'terminal|balance']);
  Q('mantle', 'What is convection, and why does it happen?',
    'Convection is heat transfer by bulk motion of material. Heating makes material **expand and become less dense**, so it is **buoyant** and rises; cooling makes it **denser**, so it sinks. Heat at the bottom and cooling at the top therefore set up circulating cells (lava lamp, pot on a stove, the mantle). It happens when the temperature difference and size are large enough to overcome the material\'s viscosity.',
    ['less dense|expand', 'rise', 'sink|denser', 'heat', 'viscosity']);
  Q('mantle', 'Compare a lava lamp to mantle convection. How is the analogy good, and where does it break down?',
    '**Similar:** heat at the bottom makes blobs expand, become less dense and rise; they cool at the top, become denser and sink, repeating as convection.\n**Different:** (1) the lava lamp uses **two different materials** (wax and liquid), while rising and sinking mantle rock is **mostly the same material** at different temperatures; (2) the lava lamp has **no plates**: its top doesn\'t take part, while Earth\'s cold top layer (lithosphere) breaks into plates that are part of the convection (slabs sink).',
    ['less dense|rise', 'sink', 'two|different material', 'same material|same rock', 'plate']);
  Q('mantle', 'The mantle\'s viscosity (~10²¹ Pa·s) is far higher than peanut butter\'s. Why does it still convect?',
    'Whether something convects depends on the **temperature difference**, the **size** of the system, thermal properties, and **viscosity** (high viscosity opposes convection). The mantle has an **enormous temperature difference** (thousands of °C at the core–mantle boundary vs. ~10 °C at the surface) and is **2,900 km thick**. Those factors overwhelm the high viscosity, so it convects, just very slowly (cm/yr) over millions of years.',
    ['temperature difference|temperature', 'size|thick|big', 'viscosity', 'slow']);
  Q('mantle', 'Use Silly Putty to explain the three ways mantle rock can deform, and say where each matters in the Earth.',
    '- **Viscous** (pull slowly → it flows like taffy and doesn\'t spring back): **mantle convection** over millions of years.\n- **Brittle** (yank it fast → it snaps): the cold **lithosphere breaking in earthquakes**.\n- **Elastic** (roll it into a ball and bounce it → it deforms and springs back): rocks transmitting **seismic waves** (elastic waves) and bending before an earthquake.',
    ['viscous', 'brittle', 'elastic', 'slow', 'fast', 'convection', 'earthquake', 'seismic wave']);
  Q('mantle', 'What two factors control whether rock deforms viscously or brittlely? Use them to explain why Earth has plates.',
    '- **Strain rate**: slow deformation → viscous flow; fast → brittle or elastic (Silly Putty).\n- **Temperature** (most important in the mantle): cold rock is very stiff (slow as molasses in winter), hot rock flows.\nThe **cold** top of the mantle plus crust (lithosphere) is too stiff to flow and **breaks** (earthquakes), so it acts as rigid **plates**; the **hot** mantle below flows viscously, letting the plates move.',
    ['strain rate|rate|fast|slow', 'temperature', 'cold', 'hot', 'lithosphere|plate', 'break|brittle']);
  Q('mantle', 'How can the same mantle rock behave as a viscous fluid AND carry elastic seismic waves?',
    'Rheology depends on the **timescale (strain rate)** of deformation. Over **millions of years** (convection, post-glacial rebound), mantle rock flows viscously. Over the **seconds** it takes a seismic wave to pass, it responds **elastically**: it deforms slightly and springs back, transmitting waves. Silly Putty does the same: it flows if pulled slowly but bounces if dropped.',
    ['timescale|time|rate', 'million', 'second', 'elastic', 'viscous|flow']);
  Q('mantle', 'Give a conceptual explanation (no equations) of why ~90% of an iceberg is below the waterline.',
    'Ice (~920 kg/m³) is only **slightly less dense** than water (~1,000 kg/m³). The iceberg isn\'t accelerating, so the **downward force of gravity** on it must balance the **upward buoyant force**, which equals the **weight of the water it displaces**. Since ice is nearly as dense as water, the berg must push aside almost its own volume of water to equal its weight, so ~**90% (920/1000 ≈ 92%) sits below the surface** and ~10% above. The fraction submerged equals the ratio of the densities.',
    ['less dense|density', 'buoyan', 'displace', 'weight', 'balance|equal', 'ratio|920']);
  Q('mantle', 'What is isostasy, and how does it explain why mountains have deep roots and continents stand above the seafloor?',
    'Isostasy is the "floating" balance of less-dense crust on denser, flowing mantle: crust sinks until it displaces mantle equal to its own weight (like an iceberg). Continental crust (~2,700 kg/m³) is lighter than mantle (~3,300), so it floats high; a mountain range must be supported by a **thick, low-density root** extending several times deeper than the peaks are high (4 km mountains → ~18 km root). Felsic continental crust is lighter and thicker than mafic oceanic crust, so continents stand higher.',
    ['float', 'dens', 'displace|weight', 'root', 'mantle']);
  Q('mantle', 'Give three different places in this course where isostasy explains an observation.',
    'Any three of:\n- **Mountains have deep roots** (Himalayan gravity surveys).\n- **Continents stand above the ocean floor** (felsic crust is less dense).\n- **Seafloor deepens with age** (cooling lithosphere gets denser and sinks lower).\n- **Post-glacial rebound** (land rises after the ice load melts).\n- **Hotspot islands** (extra melt builds thick crust that pokes above sea level).\n- **Icebergs float ~90% submerged.**',
    ['mountain|root', 'continent', 'seafloor|ocean', 'rebound|glacial', 'hotspot|island', 'iceberg']);
  Q('mantle', 'Why is the mantle described as a "fluid" but never as a "liquid"?',
    'A fluid is anything that **flows** when stressed. Over long timescales the mantle\'s solid rock **flows** (convection, isostasy, rebound), so it behaves as a very viscous fluid. But it is **not molten**: it\'s solid crystalline rock, and melt forms only in a few places beneath volcanoes. Calling it liquid is the classic misconception.',
    ['flow', 'solid', 'not molten|not liquid|not a liquid', 'volcano|few places']);
  Q('mantle', 'A cold slab is denser than the surrounding mantle. Why does it sink only ~10 cm/yr?',
    'Gravity pulls the slab down (it\'s denser), but the surrounding mantle is extremely **viscous** (~10²¹ Pa·s), so the **viscous drag** balances gravity at a very low **terminal velocity**. HW2\'s force balance gives ~13 cm/yr. A hotter (less viscous) mantle in the past would have let slabs and plates move faster.',
    ['viscous|viscosity', 'drag', 'gravity|dens', 'terminal|balance']);

  /* ======================= L8 FAULTS & ELASTIC REBOUND ======================= */
  C('faults', 'Earthquake (definition)', 'Shaking of rock as **elastic waves** pass through it, most commonly caused by sudden **movement of rock across a fault**.');
  C('faults', 'Fault', 'A fracture in the Earth **across which the two sides move relative to each other**.');
  C('faults', 'Hypocenter vs. epicenter', '**Hypocenter (focus)**: point on the fault where rupture **starts**, including **depth**. **Epicenter**: point on the **surface directly above** it.');
  C('faults', 'Normal fault', 'Hanging wall moves **down** relative to footwall · **extension** · divergent boundaries (L\'Aquila 2009).');
  C('faults', 'Reverse / thrust fault', 'Hanging wall moves **up** relative to footwall · **compression** · convergent boundaries (Chile 1960, Alaska 1964, Sumatra 2004, Tohoku 2011).');
  C('faults', 'Strike-slip fault', 'Blocks slide **horizontally** past each other · **shear** · transform boundaries (Haiti 2010, San Andreas = right-lateral).');
  C('faults', 'Hanging wall vs. footwall', 'Hanging wall = block **above** an inclined fault; footwall = block **below** (your feet stand on it).');
  C('faults', 'Right-lateral vs. left-lateral', 'Stand on one side, look across: if the far side moves to your **right**, it\'s right-lateral (same answer from either side).');
  C('faults', 'Bends in strike-slip faults', 'Push-together bend → **compression → thrusting → mountains** (Transverse Ranges); pull-apart bend → **extension → normal faults → basins** (Dead Sea).');
  C('faults', 'Elastic rebound theory', 'Plate motion bends locked rocks elastically (stores strain) → stress exceeds fault strength → rupture → rocks **snap back** to an offset position → stored energy released as **seismic waves**.');
  C('faults', 'Foreshock / mainshock / aftershock', 'Mainshock = largest; foreshocks before; aftershocks after. You only know a foreshock was a foreshock **after** the mainshock, so foreshocks can\'t predict quakes.');
  C('faults', 'Is an earthquake a point?', 'No. Rupture **starts** at the hypocenter and spreads over a large **fault area** (Sumatra 2004: ~1,200 km in ~7–8 min).');
  C('faults', 'Seismometer', 'A **mass on a spring** in a frame bolted to the ground; the mass\'s **inertia** keeps it still while the ground moves; records 3 components (vertical, N–S, E–W).');

  Q('faults', 'What is an earthquake, and why does it generate seismic waves? Explain elastic rebound theory.',
    'An earthquake is sudden **slip of rock across a fault**. Plate motion slowly builds **stress** across a fault that is **locked by friction**; the rocks on either side **bend elastically**, storing strain energy. When the stress exceeds the **strength/friction** of the fault, it **ruptures** and the rocks **snap back ("rebound")** to an unstrained shape in a new, **offset** position. That sudden release of stored elastic energy radiates as **elastic (seismic) waves**.',
    ['fault', 'stress', 'friction|locked|stuck', 'elastic', 'exceed|strength', 'rebound|snap', 'wave']);
  Q('faults', 'Describe normal, reverse (thrust) and strike-slip faults. What kind of stress and plate boundary goes with each?',
    '- **Normal**: hanging wall moves **down** relative to the footwall; caused by **extension**; typical of **divergent** boundaries (ridges, rifts).\n- **Reverse/thrust**: hanging wall moves **up**; caused by **compression**; typical of **convergent** boundaries (subduction, collision).\n- **Strike-slip**: blocks slide **horizontally** past each other; caused by **shear**; typical of **transform** boundaries (San Andreas).',
    ['normal', 'extension', 'divergent', 'thrust|reverse', 'compression', 'convergent', 'strike-slip|strike slip', 'transform']);
  Q('faults', 'What is the difference between the hypocenter and the epicenter?',
    'The **hypocenter** (focus) is the point on the fault **where the rupture begins**, a location that **includes depth**. The **epicenter** is the point on Earth\'s **surface directly above** the hypocenter (its map location). The rupture then spreads across a much larger area of the fault.',
    ['start|begin', 'depth', 'surface', 'above']);
  Q('faults', 'Why is plotting an earthquake as a dot on a map misleading?',
    'An earthquake **starts** at the hypocenter but then **propagates across a large area of the fault**; bigger quakes rupture bigger areas. The 2004 Sumatra–Andaman M9+ quake ruptured ~1,200 km of fault over ~7–8 minutes. Magnitude depends on that rupture area and slip.',
    ['propagat|spread', 'area', 'bigger|larger', 'sumatra|1200|1,200']);
  Q('faults', 'Why can\'t foreshocks be used to predict earthquakes?',
    'A foreshock is defined as a smaller quake that **precedes a larger mainshock**, but there\'s no way to tell at the time whether a quake is a foreshock: it is only **re-classified as a foreshock after** a bigger quake follows. Many small quakes are never followed by a larger one. (Nearly all large quakes have aftershocks, but not all have foreshocks.)',
    ['after', 'larger|bigger', 'mainshock', 'tell|know']);
  Q('faults', 'Why can you get thrust faults and mountains along a mostly strike-slip fault like the San Andreas?',
    'Real faults aren\'t straight. Where a strike-slip fault **bends** so the two sides **push into each other**, the bend is in **compression**, producing **reverse/thrust faulting** that builds mountains (the Transverse Ranges near LA). Where it bends the other way, the sides **pull apart** → **extension** → normal faults and a **pull-apart basin** (the Dead Sea).',
    ['bend|step', 'compression', 'thrust|reverse', 'mountain|transverse', 'extension|pull-apart|basin']);
  Q('faults', 'How does a seismometer record ground motion?',
    'It\'s essentially a **mass on a spring** in a frame attached to the ground. When the ground shakes, the frame moves with it, but the mass\'s **inertia** keeps it nearly still; the **relative motion** between frame and mass is recorded (a seismogram). Modern instruments use three masses to record **three components**: vertical, north–south and east–west.',
    ['mass', 'spring', 'inertia', 'relative', 'three|3|vertical']);
  Q('faults', 'Why do earthquakes occur mainly at plate boundaries, and how does the boundary type determine the kind of earthquake?',
    'Plates move relative to one another, and the stress concentrates where they meet; that\'s where rock breaks. The **boundary type sets the stress**, and the stress sets the **fault type**: extension at divergent boundaries → **normal** faults (small quakes); shear at transforms → **strike-slip** (intermediate); compression at convergent boundaries → **thrust** (largest, M9 at subduction zones).',
    ['boundar', 'stress', 'normal', 'strike-slip|strike slip', 'thrust|reverse']);

  /* ======================= L8–9, 11 SEISMIC WAVES & LOCATION ======================= */
  C('waves', 'Body waves vs. surface waves', '**Body** (P, S): travel **through** Earth; faster; **higher frequency**. **Surface** (Love, Rayleigh): travel along the surface; slower; **lower frequency, larger amplitude**, more damaging.');
  C('waves', 'P wave', 'Primary · body · **compressional/longitudinal** (particle motion **parallel** to travel, like sound or a pushed Slinky) · **fastest, arrives first** (~5 km/s crust) · travels through solids **and** liquids.');
  C('waves', 'S wave', 'Secondary · body · **shear/transverse** (motion **perpendicular** to travel, like a shaken rope) · second (~3 km/s) · **cannot travel through liquids** (no rigidity).');
  C('waves', 'Love wave', 'Surface · **horizontal side-to-side** shaking perpendicular to travel · **most damaging** to buildings.');
  C('waves', 'Rayleigh wave', 'Surface · **rolling elliptical** motion (up-down + back-forth, retrograde), like ocean swells · mostly vertical · less damaging than Love.');
  C('waves', 'Why are all seismic waves "elastic waves"?', 'Rock deforms, stores **elastic potential energy**, springs back, and pushes the next bit: a continuous **PE ↔ KE** exchange (Slinky, human-chain demo).');
  C('waves', 'Wave terms', '**Amplitude** = displacement size · **wavelength** = distance between crests · **period** = time between crests · **frequency** = waves per second = 1/period.');
  C('waves', 'Order of arrival on a seismogram', '**P → S → Love → Rayleigh**. P is small and high-frequency; surface waves are big and long-period.');
  C('waves', 'S–P time', 'The delay between P and S arrivals **grows with distance** → tells how far away the quake is.');
  C('waves', 'How many stations to locate a quake?', '**Three** (trilateration): 1 → circle, 2 → two possible points, 3 → one epicenter.');
  C('waves', 'Lightning–thunder analogy', 'Light ≈ instant, sound ≈ 0.2 mi/s, so ~5 s per mile. Same idea as S–P time, but P is only ~2× faster than S.');
  C('waves', 'Why are P waves faster than S waves?', 'P waves are resisted by both compression and shear stiffness; S waves only by **rigidity** (shear stiffness). Speed ≈ √(stiffness/density).');

  Q('waves', 'Describe the particle motion of P, S, Love and Rayleigh waves. Which are body waves and which are surface waves?',
    '- **P (body)**: compressional/longitudinal; particles move back and forth **parallel** to the direction of travel (push–pull, like sound).\n- **S (body)**: shear/transverse; particles move **perpendicular** to travel (up-down or side-to-side, like a shaken rope).\n- **Love (surface)**: **horizontal side-to-side** shaking perpendicular to travel.\n- **Rayleigh (surface)**: **rolling elliptical** motion (up-down plus back-forth), like ocean waves.',
    ['parallel', 'perpendicular', 'body', 'surface', 'horizontal', 'roll|ellip']);
  Q('waves', 'Which seismic wave arrives first at a seismometer, and why?',
    'The **P wave** (primary). It is the fastest (~5 km/s in crustal rock vs. ~3 km/s for S) because compressional waves are resisted by both the rock\'s resistance to compression and its rigidity, giving a higher effective stiffness. Then come S waves, then the slower surface waves (Love, then Rayleigh).',
    ['p wave|p-wave|primary', 'fastest|faster', 'compress', 's wave|s-wave', 'surface']);
  Q('waves', 'Why can\'t S waves travel through liquids? What does that tell us about the mantle?',
    'S waves propagate by **shearing**: each bit of material is displaced sideways and its **rigidity** (shear stiffness) pulls it back and drags the next bit along. Liquids have **no rigidity**: they don\'t resist shear, so there\'s no restoring force (the human-chain demo with arms dropped: nothing propagated). S waves travel through the mantle, which confirms the mantle is **solid**. (They don\'t pass through the liquid outer core.)',
    ['shear', 'rigid', 'liquid', 'restor|pull back|connected', 'solid']);
  Q('waves', 'Explain why seismic waves are "elastic waves." How did the Slinky (or human-chain) demo show this?',
    'As a wave passes, rock is **compressed or sheared**, storing **elastic potential energy**, then **springs back** to its original shape (like a stretched Slinky), pushing on the next bit of rock, which gains **kinetic energy**. The wave travels by this continual exchange of elastic PE and KE; the rock isn\'t permanently deformed. In the human chain, each person moved only because the person next to them pushed or pulled, not by anticipating.',
    ['elastic', 'spring back|snap back|original shape', 'potential', 'kinetic', 'slinky|chain']);
  Q('waves', 'Compare body waves and surface waves: speed, frequency, amplitude, and damage.',
    'Body waves (P, S) travel **through** Earth\'s interior; they are **faster** and **higher frequency** (short period) and smaller in amplitude. Surface waves (Love, Rayleigh) are trapped near the surface; they are **slower**, **lower frequency** (long period), and **larger in amplitude** because their energy stays concentrated at the surface. They are more **damaging**: bigger shaking, periods that match buildings, and they travel far.',
    ['faster', 'slower', 'frequency', 'amplitude', 'damag']);
  Q('waves', 'Describe what a seismogram of a distant large earthquake looks like and how you would identify each wave.',
    'Three traces (vertical, N–S, E–W). First, a small, **high-frequency P wave**, mostly on the **vertical** component (waves arrive steeply from below). Minutes later, the larger **S wave**, mostly on the **horizontal** components. Then the large, **long-period surface waves**: the **Love** wave (horizontal, perpendicular to the path) followed by the **Rayleigh** wave (vertical plus horizontal along the path). Shaking can continue for hours as waves circle Earth.',
    ['p', 'vertical', 's', 'horizontal', 'love', 'rayleigh', 'period|frequency']);
  Q('waves', 'Explain how seismologists locate an earthquake using P and S waves.',
    '1. P waves travel faster than S waves, so the **S–P delay grows with distance** (like counting seconds between lightning and thunder).\n2. At each station, measure the S–P time and convert it (using known speeds/travel-time curves) to a **distance**.\n3. Draw a **circle** of that radius around the station.\n4. Two stations give two possible intersection points; a **third station** picks the single point where all circles meet: the **epicenter** (trilateration).',
    ['faster', 's-p|s–p|delay|time difference|lag', 'distance', 'circle', 'three|3|third']);
  Q('waves', 'How is locating an earthquake like figuring out how far away lightning struck?',
    'Light arrives almost instantly but thunder (sound) travels ~0.2 miles per second, so counting the seconds between flash and thunder gives distance (~5 s per mile). Similarly, P waves outrun S waves, so the **S–P delay** gives distance to the quake. With **three observers/stations**, the three distance circles intersect at one point: the location. The difference is that P is only ~2× faster than S, while light is vastly faster than sound.',
    ['light', 'sound|thunder', 'delay|seconds|time', 'distance', 'three|3']);
  Q('waves', 'Why do you need at least three seismic stations to locate an earthquake?',
    'One station\'s S–P time gives only a **distance**, so the quake could be anywhere on a **circle** around it. A second station\'s circle intersects the first at **two points**, which is still ambiguous. A **third** circle passes through only one of those points, uniquely fixing the epicenter.',
    ['distance', 'circle', 'two points|2 points|two possible', 'third|three|3']);
  Q('waves', 'Define amplitude, wavelength, period and frequency.',
    '- **Amplitude**: the size (height) of the wave, i.e., how far the ground is displaced.\n- **Wavelength**: distance between successive crests.\n- **Period**: time between successive crests passing a point.\n- **Frequency**: number of waves per second = **1/period**.',
    ['amplitude', 'wavelength', 'period', 'frequency', '1/period|inverse']);

  /* ======================= L9–10 MAGNITUDE, INTENSITY, DAMAGE ======================= */
  C('size', 'Magnitude', 'The **size/energy** of an earthquake: one value per quake. All scales are **logarithmic**.');
  C('size', '+1 magnitude means…', '**10× the wave amplitude (shaking)** and **~32× the energy**. M9 vs M7: 100× amplitude, ~1,000× energy.');
  C('size', 'Richter magnitude', 'First scale: log of **peak amplitude** on a seismogram, corrected for distance. Underestimates large/distant quakes; seismologists rarely use it now.');
  C('size', 'Moment magnitude (Mw)', 'Based on **seismic moment = rock rigidity × rupture area × slip**. Most accurate; used for big quakes.');
  C('size', 'Rupture length vs. magnitude', 'M4 ≈ 100 m · M5 ≈ 1 km · M6 ≈ 10 km · M7 ≈ 100 km · M8+ ≈ 1,000+ km. "Large earthquakes mean large faults."');
  C('size', 'Largest earthquake ever recorded', '**M9.5, Chile 1960.** There is **no M10**: no fault is long enough.');
  C('size', 'Mercalli intensity', 'Shaking **at a particular place** (I–XII). Varies across locations; depends on magnitude, distance, duration, local geology.');
  C('size', 'Why vertical shaking is relatively safe', 'Buildings are designed to carry **vertical loads (gravity)**, not sideways forces.');
  C('size', 'Natural sway periods', '1-story house ≈ **0.1 s**; 30-story building ≈ **3 s**. Flexible (wood, steel) → longer; stiff (brick, concrete) → shorter.');
  C('size', 'Resonance', 'When the wave period **matches** a structure\'s natural sway period, shaking is **amplified**: a common cause of collapse.');
  C('size', 'Site amplification', 'Soft sediment, mud, fill and lake beds **amplify** shaking: waves slow down so amplitude grows (energy conservation), and basins resonate.');
  C('size', 'High vs. low frequency waves and damage', 'High-frequency: damage near the epicenter, **die out quickly**. Low-frequency (long-period): **travel far**, resonate with tall buildings and bridges.');
  C('size', 'Rupture size → wave frequency', 'Short rupture/short duration → **high frequency**; long rupture/long duration → **low frequency**.');
  C('size', 'Depth and damage', '**Shallow** quakes generate strong surface waves (more damage); **deep** quakes don\'t.');

  Q('size', 'What does it mean that earthquake magnitude scales are logarithmic? Compare an M7 and an M9.',
    'Each step of 1 in magnitude means **10× larger wave amplitude (shaking)** and about **32× more energy**. An M9 shakes the ground with ~100× the amplitude of an M7 and releases ~1,000× (32²) as much energy. (HW: 3 cm road waves at M7 → 30 cm at M8 → 3 m at M9.)',
    ['10|ten', '32', '100', '1000|1,000|thousand', 'amplitude|shaking']);
  Q('size', 'What is the difference between earthquake magnitude and intensity?',
    '**Magnitude** measures the **size of the earthquake itself** (energy released, from rupture area × slip or wave amplitudes); there is **one value per quake**, on a logarithmic scale. **Intensity** (Mercalli scale, I–XII) measures **how strongly the ground shook at a particular location**, so one quake has many intensities. Intensity depends on magnitude, **distance**, **depth**, **duration** and **local geology**.',
    ['size|energy', 'one|single', 'location|place', 'mercalli', 'distance', 'geology|sediment|soil']);
  Q('size', 'Compare the Richter scale with the moment magnitude scale.',
    'The **Richter** scale (the first one) uses the logarithm of the **peak amplitude** of waves on a seismogram, corrected for distance. It **underestimates** very large or distant earthquakes. The **moment magnitude** scale is based on the **seismic moment = rock strength (rigidity) × rupture area × slip**, i.e., the physical size of the rupture and the energy released. It is the modern, most accurate scale, especially for great earthquakes. Both are logarithmic.',
    ['amplitude', 'underestimat|saturat', 'moment', 'area', 'slip', 'logarithm']);
  Q('size', 'What controls an earthquake\'s magnitude? Why is there no magnitude 10?',
    'Magnitude depends on the **area of fault that ruptures** (length × depth extent), the **amount of slip**, and the **strength/friction** of the rock. Bigger faults and more slip mean bigger quakes: ~100 km rupture ≈ M7, ~1,000+ km ≈ M8–9. The largest recorded is **M9.5** (Chile 1960, ~1,500 km). An M10 would need a fault **far longer than any on Earth**.',
    ['area|length', 'slip', 'fault', '9.5', 'no fault|large enough|long enough']);
  Q('size', 'Why are Love waves more damaging to buildings than Rayleigh waves?',
    'Buildings are engineered to carry **vertical** loads (their own weight under gravity), so vertical shaking is relatively safe. **Love waves are entirely horizontal**: they shove the foundation sideways while the building\'s mass lags (inertia), **shearing columns** and toppling structures (especially soft first stories). **Rayleigh waves** are mostly **vertical** rolling motion, which buildings tolerate better.',
    ['horizontal', 'vertical', 'gravity|weight', 'designed|engineered', 'shear|topple|collapse']);
  Q('size', 'Give three reasons surface waves cause more damage than body waves.',
    '1. **Larger amplitude**: their energy stays concentrated near the surface where buildings are.\n2. **Lower frequency (longer period)**: they match the natural sway periods of buildings and bridges → **resonance**, and low-frequency waves **travel farther** without dying out.\n3. **Horizontal motion** (especially Love waves) that buildings aren\'t designed to resist.',
    ['amplitude', 'frequency|period', 'resonan', 'horizontal', 'farther|far']);
  Q('size', 'Explain resonance and why it matters for building damage.',
    'Every building sways back and forth at a **natural period** (~0.1 s for a 1-story house, ~3 s for a 30-story tower; flexible materials sway slower). If incoming seismic waves have about the **same period**, each push adds to the sway and the shaking is **amplified**: resonance, a common cause of catastrophic failure. Long-period surface waves from large quakes tend to resonate with **tall buildings and bridges**.',
    ['natural period|sway', 'match|same period', 'amplif', 'tall|bridge']);
  Q('size', 'What is site amplification? Explain why it happens and give an example.',
    'Ground built on **soft sediments, mud, artificial fill or old lake beds** shakes much more than nearby **bedrock** during the same earthquake. Seismic waves **slow down** in soft material; to conserve energy their **amplitude increases**, and sediment-filled basins can **resonate** ("shake like a bowl of Jell-O"). Examples: **Mexico City 1985** (old lake bed, 350+ km from the epicenter, ~8,000 dead); the **Nimitz Freeway** collapse in the 1989 Loma Prieta quake (built on mud); 1906 San Francisco damage on fill.',
    ['soft|sediment|mud|fill', 'bedrock|hard rock', 'slow', 'amplitude', 'mexico|nimitz|loma']);
  Q('size', 'How do rupture length and duration affect the frequency of seismic waves, and how does frequency affect where damage occurs?',
    'Short ruptures (small quakes) radiate mostly **high-frequency** waves; long, long-lasting ruptures (big quakes) radiate lots of **low-frequency** waves. High-frequency waves damage structures near the epicenter but **die out quickly** with distance. Low-frequency waves **travel much farther** and **resonate with tall buildings and bridges**, so great earthquakes can cause damage far away.',
    ['short', 'long', 'high frequency|high-frequency', 'low frequency|low-frequency', 'die out|decay', 'far|distance']);
  Q('size', 'Why are deep earthquakes usually less damaging than shallow ones of the same magnitude?',
    '**Shallow** earthquakes (within a few tens of km of the surface) generate strong **surface waves**, which have large amplitudes and low frequencies and do most of the damage. **Deep** earthquakes (e.g., 100–700 km) generate few surface waves, and the energy spreads out over a longer path before reaching the surface. Example: the deep (110 km) 2026 Colombia M7.4 was much less destructive than the shallow Venezuela M7.2/7.5 doublet.',
    ['shallow', 'deep', 'surface wave', 'distance|farther|spread']);
  Q('size', 'List factors besides magnitude that determine how much damage an earthquake causes.',
    '- **Depth** (shallow → strong surface waves).\n- **Distance** from population centers (high frequencies decay).\n- **Local geology / site amplification** (soft sediment vs. bedrock).\n- **Wave frequency vs. building resonance.**\n- **Duration** of shaking.\n- **Construction quality and building codes** (Haiti vs. Chile).\n- **Secondary hazards**: tsunamis, fires, landslides.\n- **Warning systems and hazard communication** (Sumatra 2004, Fukushima, L\'Aquila).',
    ['depth|shallow', 'distance', 'site|sediment|geology', 'resonan|frequency', 'construction|building code', 'tsunami|fire', 'warning|communicat']);
  Q('size', 'A smaller earthquake in Virginia (M5.8) was felt over a much larger area than a larger one in California (M6.0). Why?',
    'Intensity depends on the **local geology**, not just magnitude. Eastern North America\'s crust is **old and cold**, far from any active plate boundary, and **transmits seismic energy very efficiently** with little loss, so the waves are felt far away. California\'s warmer, more fractured crust near an active boundary absorbs energy faster. "The geology matters."',
    ['old', 'cold', 'transmit|efficient', 'geology', 'intensity']);

  /* ======================= L10 BOUNDARIES & FAMOUS QUAKES ======================= */
  C('cases', 'L\'Aquila, Italy 2009 (M6.3): concepts', '**Normal fault** (extension in the bending overriding plate above Italy\'s subduction zone) · vulnerable old masonry · **failed risk communication** (scientists prosecuted).');
  C('cases', 'Haiti 2010 (M7.0): concepts', '**Strike-slip** (transform boundary) · "medium" size but **shallow, under Port-au-Prince, poor construction** → ~150,000+ dead.');
  C('cases', 'Chile 1960 (M9.5): concepts', '**Subduction thrust** · largest ever recorded, ~1,500 km rupture · Pacific-wide tsunami · later Chilean quakes had low deaths thanks to **building codes**.');
  C('cases', 'Alaska 1964 (M9.2): concepts', 'Subduction thrust · largest US quake · 13–15 m vertical motion · tsunami deaths · **ghost forests** from subsidence · explained after the fact by plate tectonics.');
  C('cases', 'Sumatra–Andaman 2004 (M9.1–9.3): concepts', '~1,200 km rupture over ~7–8 min · ~230,000 dead mostly from **tsunami** · **no Indian Ocean warning system** · M9 had been **underestimated** there.');
  C('cases', 'Tohoku, Japan 2011 (M9.0): concepts', 'Tsunami killed most of ~16–18k · **Fukushima**: known hazard **not communicated** to engineers · well-built schools saved lives.');
  C('cases', 'Mexico City 1985 (M8.1): concepts', '**Seismic gap** (Michoacán gap filled) + **site amplification** on old lake bed 350+ km away (~8,000 dead).');
  C('cases', 'Cascadia: concepts', 'Juan de Fuca subducting under North America · **locked** since the **M9 of Jan 26, 1700** · next M9.0–9.2 is **inevitable, timing unknown** · dated by Japanese "orphan tsunami" records.');
  C('cases', 'Loma Prieta 1989 (M6.9): concepts', '**Site amplification + resonance**: the Nimitz Freeway on soft mud pancaked (42 of 67 deaths).');
  C('cases', 'San Francisco 1906: concepts', 'Right-lateral **San Andreas** transform · worst damage on **artificial fill** · **fires** caused most damage.');
  C('cases', 'Why are subduction quakes followed by deadly tsunamis?', 'Thrust motion **lifts or drops the seafloor vertically**, displacing the whole water column above.');
  C('cases', 'The Pacific "Ring of Fire"', 'Ring of **subduction zones** around the Pacific with most of the largest earthquakes and most dangerous volcanoes.');

  Q('cases', 'For a divergent plate boundary, what type of faulting and what size earthquakes do you expect? Why? (She said she wants you able to explain this.)',
    '**Normal faulting**, because the plates are pulling apart (**extension**), so the hanging wall drops down. Earthquakes are **small**, because new lithosphere at a spreading center is **hot and thin** (small frictional contact area) and the rock is in **tension**, which it can\'t sustain much of, so faults slip before much stress builds. (Continental rifts, with thicker lithosphere, can be somewhat larger.)',
    ['normal', 'extension|pulling apart', 'small', 'hot', 'thin', 'tension']);
  Q('cases', 'For a convergent (subduction) boundary, what type of faulting and what size earthquakes do you expect? Why?',
    '**Thrust (reverse) faulting**, because the plates are pushed together (**compression**), so the hanging wall moves up (the overriding plate rides over the subducting one on the megathrust). Earthquakes are the **largest (up to M9+)**, because the plates are **cold and thick**, the dipping contact area is **enormous** (hundreds to >1,000 km long), and rocks are **strong in compression**, so huge elastic energy builds before release. They also generate **tsunamis**.',
    ['thrust|reverse', 'compression', 'largest|biggest|m9', 'cold', 'thick', 'area|contact', 'tsunami']);
  Q('cases', 'For a transform boundary, what type of faulting and what size earthquakes do you expect? Why?',
    '**Strike-slip** faulting: the plates slide horizontally past each other (**shear**). Earthquakes are **intermediate**: they can be large and very deadly (Haiti 2010 M7.0, Turkey 2023 M7.8, San Francisco 1906 ~M7.9) but **not M9**, because the near-vertical fault is relatively narrow in depth (moderate temperature and thickness, modest contact area).',
    ['strike-slip|strike slip', 'horizontal|slide', 'intermediate|medium|middle', 'not m9|never m9|smaller than']);
  Q('cases', 'What concept(s) does the 2009 L\'Aquila, Italy earthquake illustrate?',
    '(1) **Normal faulting can occur within a convergent setting**: Italy sits above a subduction zone, but the overriding plate **bends/buckles**, creating **extension** and normal faults. (2) **Communicating risk**: after many small tremors, officials told residents not to worry; an M6.3 then killed ~300 people in old, vulnerable buildings, and scientists were prosecuted (convicted, later acquitted), a lesson about how hazard information is communicated.',
    ['normal', 'extension', 'subduction|convergent', 'communicat', 'building|masonry']);
  Q('cases', 'Why was the 2010 Haiti earthquake (M7.0) one of the deadliest in history?',
    'It was a "medium-sized" **strike-slip** (transform) quake, ~100× smaller in amplitude than an M9, but it was **shallow**, **directly beneath a densely populated city** (Port-au-Prince), and buildings were **poorly constructed** with weak or unenforced building codes. ~150,000+ people died. **Size isn\'t everything**: depth, proximity and construction matter.',
    ['strike-slip|strike slip|transform', 'shallow', 'city|populat', 'construction|building', 'size|magnitude']);
  Q('cases', 'Why did the 2004 Sumatra–Andaman earthquake kill so many people?',
    'It was a huge (M9.1–9.3) **subduction megathrust** quake that ruptured ~1,200 km of fault, lifting the seafloor (~20 m uplift) and generating a **tsunami** that crossed the Indian Ocean. Most of ~230,000 deaths were from the tsunami because there was **no Indian Ocean tsunami warning system** (unlike the Pacific), it struck on a **holiday**, and scientists had **underestimated** the chance of an M9 in that subduction zone; now we think an M9 is possible at almost any subduction zone.',
    ['tsunami', 'warning', 'subduction|megathrust', 'underestimat', 'holiday']);
  Q('cases', 'What does the 2011 Tohoku earthquake and the Fukushima disaster illustrate?',
    'Even a well-prepared country can suffer when hazard knowledge isn\'t used: most of the ~16,000–18,000 deaths were from the **tsunami**, and the **Fukushima** nuclear plant failed. Seismologists knew an M9 was possible there, but that wasn\'t **communicated** to those designing seawalls and the plant. Also: well-constructed buildings with roof refuges (a coastal school) saved lives.',
    ['tsunami', 'fukushima', 'communicat', 'known|knew', 'seawall|construction']);
  Q('cases', 'The 1985 Mexico City earthquake illustrates two important concepts. What are they?',
    '1. **Seismic gap**: the Michoacán segment of the Cocos–North America subduction zone hadn\'t ruptured in a long time while its neighbors had; the 1985 M8.1 "filled the gap."\n2. **Site amplification**: Mexico City is **350–400 km** from the epicenter but is built on the **soft sediments of an old lake bed** (the drained Aztec lake). Those sediments amplified and prolonged the shaking ("bowl of Jell-O"); hard-rock sites shook little, and ~8,000 died in collapses.',
    ['seismic gap|gap', 'site amplification|amplif', 'lake', 'sediment', 'far|distance|350|400']);
  Q('cases', 'Why do seismologists expect a magnitude ~9 earthquake in Cascadia even though it has been quiet in recorded history?',
    'Cascadia is a **subduction zone** (Juan de Fuca plate under North America), and subduction zones host the largest earthquakes. The megathrust is **locked**, so its quiet means strain is **accumulating** (elastic rebound), not that it\'s safe. Geologic evidence (ghost forests, tree rings, oral histories, offshore deposits, and the 1700 "orphan tsunami" in Japanese records) shows it produced an **M9 on Jan 26, 1700** and many before. The next one is **inevitable, but its timing can\'t be predicted**.',
    ['subduction', 'locked', 'strain|stress|accumulat', '1700|orphan|japan', 'inevitable|when']);
  Q('cases', 'How do we know the date of the last great Cascadia earthquake (January 26, 1700)?',
    'From **written records in Japan** of an "orphan tsunami" (a tsunami with no local earthquake), which modeling matched to an M9 rupture of Cascadia. Supporting evidence: **ghost forests** (coastal trees drowned when the land subsided; tree rings show they died between 1699 and 1700) and **Native oral histories**, which narrow the time but don\'t give the exact date.',
    ['japan', 'tsunami', 'tree|dendro|ghost forest', 'oral']);
  Q('cases', 'Why did the Nimitz Freeway collapse in the 1989 Loma Prieta earthquake?',
    'The collapsed section of the double-decker freeway (Cypress viaduct) was built on **soft mud**, which **amplified** the shaking (**site amplification**). The structure also had a natural period that **resonated** with the shaking of the muds, so the upper deck pancaked onto the lower deck, killing 42 of the quake\'s 67 victims. Nearby sections on firmer ground survived.',
    ['mud|soft|sediment', 'amplif', 'resonan', 'pancake|collapse']);
  Q('cases', 'Why do strong earthquakes in Chile cause fewer deaths than smaller ones in some other countries?',
    'Chile has **strict, well-enforced building codes** and good infrastructure, so buildings survive strong shaking (the 2010 M8.8 and 2015 M8.3 had relatively low fatalities). Places with poor construction (Haiti 2010, M7.0) suffer far more. There is **no one-to-one relationship between magnitude and fatalities**.',
    ['building code|codes|construction', 'infrastructure|enforced', 'magnitude', 'haiti']);

  /* ======================= L11 STICK-SLIP & SEISMIC GAPS ======================= */
  C('gaps', 'Stick-slip behavior', 'A high-friction fault **sticks** while stress builds, then **slips suddenly** (earthquake), then sticks again, repeating as the earthquake cycle.');
  C('gaps', 'Slider-block demo: what represents what?', 'Steady hand = **plate motion** · bungee/rubber band = **elastic crust** (stores strain) · brick on sandpaper = **fault held by friction** · lurch = **earthquake**.');
  C('gaps', 'Two-brick demo shows…', 'First brick slips repeatedly, each slip **loads** the second; the **locked** second brick = a **seismic gap**; it slips when enough stress accumulates.');
  C('gaps', 'Seismic gap', 'A fault segment that **hasn\'t ruptured in a long time while its neighbors have**: still loaded, so the **likely site of the next big quake** (where, not when).');
  C('gaps', 'Fault creep', 'Low-friction segments **slide steadily** with small quakes instead of sticking (central San Andreas creeping section).');
  C('gaps', 'Seismic gap examples', '**Shumagin Gap** (Alaska) · **North Anatolian Fault** next to **Istanbul** · **Cascadia** · Michoacán gap (filled 1985) · locked San Andreas segments.');
  C('gaps', 'North Anatolian Fault sequence', 'Ruptured segment by segment marching **westward** (1939 → 1999 Izmit): stress transfer to the neighbor; the remaining gap is near **Istanbul**.');
  C('gaps', 'Fridge analogy', 'Push an old fridge: nothing, nothing… then it suddenly **lurches** once you overcome friction. That\'s stick-slip.');

  Q('gaps', 'Explain how the slider-block demonstration illustrates stick-slip behavior and the earthquake cycle.',
    'The **hand moving steadily** represents **plate motion**; the **bungee cord** is the **elastic crust**; the **brick on sandpaper** is the **fault held by friction**. As the hand moves, the brick **doesn\'t move**; the cord **stretches and stores elastic energy** (stick). When the cord\'s pull exceeds friction, the brick **suddenly lurches** forward (slip = the **earthquake**), releasing the stored energy; then it sticks again and the cycle repeats. So **steady plate motion produces episodic, sudden earthquakes**, which is elastic rebound.',
    ['plate', 'elastic|bungee|spring', 'friction', 'store|stretch', 'lurch|slip|sudden', 'repeat|cycle']);
  Q('gaps', 'How does the two-block (two-brick) slider demo illustrate a seismic gap?',
    'Two bricks linked by a cord represent **two adjacent fault segments**. Pulling on the first, it slips repeatedly (small quakes); each slip **stretches the cord to the second brick, transferring stress** to it. The second brick stays **locked** until enough stress accumulates to overcome its friction, then it slips (often right after a first-brick slip). Before it moves, it is a **seismic gap**: a segment that hasn\'t ruptured but is being **loaded** and is "ready to go."',
    ['two|adjacent|neighbor', 'transfer|load', 'locked|stuck', 'gap', 'friction']);
  Q('gaps', 'What is a seismic gap? Give an example and explain why it matters for hazards.',
    'A seismic gap is a segment of an active fault (often a subduction zone or major transform) that **hasn\'t ruptured in a long time while neighboring segments have**. It is still being **loaded** by plate motion and by stress transferred from neighbors, so it is the **most likely place for the next large earthquake**. Examples: the segment of the **North Anatolian Fault near Istanbul**, the **Shumagin Gap** in Alaska, **Cascadia**. Gaps tell us **where to prepare**, though not exactly when.',
    ['hasn\'t ruptured|not ruptured|long time', 'neighbor|adjacent', 'load|stress', 'next', 'istanbul|shumagin|cascadia|michoacan']);
  Q('gaps', 'If plates move steadily at a few cm/yr, why do earthquakes happen suddenly instead of the faults sliding smoothly?',
    'Most faults have **high friction**, so they **stick** while the plates keep moving, and the surrounding rock bends **elastically**, storing strain. Only when the stored stress exceeds the frictional strength does the fault **slip suddenly**, releasing years to centuries of accumulated motion at once. Faults with low friction can **creep** steadily instead (part of the San Andreas), producing only small quakes.',
    ['friction', 'stick|stuck|locked', 'elastic|strain', 'exceed', 'creep']);
  Q('gaps', 'Why do earthquakes on long faults often occur in sequences that march along the fault?',
    'When one segment ruptures, it relieves its own stress but **transfers stress to adjacent segments** (like the first brick loading the second through the cord). The neighboring segment is pushed closer to failure and often ruptures years to decades later. The **North Anatolian Fault** ruptured westward in a sequence from 1939 to 1999, leaving the remaining gap near **Istanbul**.',
    ['transfer|load', 'adjacent|neighbor|next', 'segment', 'anatolian|turkey|istanbul']);

  Q('gaps', 'Some segments of the San Andreas Fault "creep" instead of producing large earthquakes. What does this tell us about stick-slip behavior?',
    'Whether a fault produces big earthquakes depends on its **friction**. On **creeping** segments, friction is low, so the fault **slides steadily** (millimeters per year) with many small quakes and never stores much elastic strain. On **locked** high-friction segments, the fault **sticks** while strain builds and then **slips suddenly** in large earthquakes. Locked segments are the hazard (and potential seismic gaps); creeping ones relieve stress gradually.',
    ['friction', 'creep|steady|slide', 'locked|stick', 'strain|stress', 'small']);
  Q('gaps', 'Can scientists predict exactly when a seismic gap will rupture? Explain using the slider-block demo.',
    'No. Seismic gaps tell us **where** a large quake is likely, not **when**. In the demo, even with steady pulling, the timing of each lurch is **irregular**: it depends on small variations in friction and on stress transferred from the neighboring block, which can trigger the locked block at an unpredictable moment. Real faults are far more complex, so we can make **long-term forecasts** (probabilities, recurrence intervals like ~240 yr for Cascadia) but not short-term predictions.',
    ['where', 'when', 'irregular|unpredictable', 'friction', 'forecast|probabilit']);
  Q('gaps', 'What is the earthquake cycle? Describe its stages.',
    '1. **Interseismic (loading)**: plates move steadily, the locked fault doesn\'t slip, and the surrounding crust bends **elastically**, storing strain energy (the bungee stretching).\n2. **Coseismic (earthquake)**: stress exceeds frictional strength, the fault **ruptures**, and the rocks **rebound**, releasing energy as seismic waves (the brick lurching).\n3. **Postseismic**: aftershocks, then the fault **re-locks** and loading starts again. The cycle repeats as long as the plates keep moving.',
    ['load|build', 'elastic', 'rupture|slip', 'rebound', 'repeat|again|cycle']);
  Q('faults', 'How does the hanging wall move on a normal fault vs. a thrust fault, and how can you figure this out without memorizing?',
    'Picture two blocks separated by an inclined fault. **Pull them apart (extension)**: the upper block (**hanging wall**) slides **down** the fault, which is a **normal** fault. **Push them together (compression)**: the hanging wall is forced **up** the fault, which is a **reverse/thrust** fault. So just ask: "is this boundary pulling apart or pushing together?"',
    ['hanging wall', 'down', 'up', 'extension|apart', 'compression|together']);
  Q('faults', 'What is the difference between strike-slip and dip-slip faults? How do you tell right-lateral from left-lateral?',
    '**Dip-slip** faults (normal and reverse/thrust) move **up or down the dip** of the fault plane, driven by extension or compression. **Strike-slip** faults move **horizontally**, along the strike, driven by shear. For strike-slip: stand on one side and look across the fault. If the far side moved to your **right**, it is **right-lateral**; to your left, **left-lateral**. You get the same answer from either side. The San Andreas is right-lateral.',
    ['dip', 'up|down|vertical', 'horizontal', 'right', 'across']);
  Q('mobile', 'Why do hurricanes and thunderstorms depend on latent heat?',
    'Warm ocean water **evaporates**, absorbing large amounts of **latent heat** from the Sun-warmed surface and storing it in water vapor. When moist air rises and cools, the vapor **condenses** into cloud droplets and **releases that latent heat**, warming the surrounding air, making it more **buoyant**, and strengthening the updraft (more convection), which draws in more moist air. This feedback powers thunderstorms and hurricanes.',
    ['evaporat', 'latent', 'condens', 'release', 'buoyan|rise|updraft']);
  Q('mobile', 'Why does ice floating on water matter, and what gives water its unusual properties?',
    'Water molecules form **hydrogen bonds**, which give water an unusually **high heat capacity**, **high latent heats**, and the odd property that **ice is less dense than liquid water**. Because ice floats, lakes and oceans freeze from the top down (insulating the water below), and icebergs float with ~90% below the surface (isostasy). These properties let water store and move enormous amounts of energy around the planet.',
    ['hydrogen', 'less dense', 'heat capacity', 'latent', 'float']);
  Q('waves', 'In the human-chain demo, why did nothing propagate when students dropped their arms for an S wave?',
    'Dropping arms removed the **connection (rigidity)** between neighbors, which is how a **liquid** behaves. An S wave moves by **shearing** each element sideways and having its stiffness pull the next element along. With no rigidity, there is no restoring force to pass the sideways motion on, so the wave can\'t propagate. That is why **S waves don\'t travel through liquids**. P waves still can, because liquids resist compression.',
    ['rigid|connect', 'liquid', 'shear|sideways', 'restor|pull', 'p wave|compress']);

  /* ======================= L12 VOLCANIC SETTINGS & MELTING ======================= */
  C('melting', 'Three settings for almost all volcanism', '1. **Divergent** boundaries (mid-ocean ridges) 2. **Convergent** boundaries (subduction zones) 3. **Hotspots** (mantle plumes).');
  C('melting', 'Volcanism at transform boundaries?', '**None.** Horizontal sliding only: no upwelling (no decompression) and no water (no flux melting).');
  C('melting', 'Mid-ocean ridge volcanism', '**Decompression** melting of passively upwelling shallow mantle · **mafic** · underwater **pillow basalts** · **~80% of Earth\'s magma** · makes oceanic crust (~7 km) · least dangerous.');
  C('melting', 'Pillow basalts', 'Mafic lava erupted **underwater**, quenched quickly by cold seawater into pillow-shaped blobs (also behind the Target in Meriden, CT: Pangaea breakup ~200 Myr).');
  C('melting', 'Hotspot volcanism', 'Hot, buoyant **solid** plume from the deep mantle → **decompression** melting that starts **deeper** → **more melt** → islands (isostasy) · mafic · gentle.');
  C('melting', 'Subduction-zone volcanism', 'Slab releases **water** into the mantle wedge → **dehydration/flux melting** → wet, felsic, volatile-rich magma → **most explosive** · volcanic arcs.');
  C('melting', 'Island arc vs. continental arc', 'Island arc: ocean under ocean (Japan, Aleutians, Philippines). Continental arc: ocean under continent (Cascades, Andes).');
  C('melting', 'Melting temperature vs. pressure', 'Melting T **increases with pressure/depth**: high pressure makes it harder for atoms to break bonds and form a liquid.');
  C('melting', 'Decompression (pressure-release) melting', 'Hot mantle **rises**, pressure drops, the melting point drops below its temperature → melts **without adding heat** (ridges, hotspots).');
  C('melting', 'Dehydration (flux, wet) melting', '**Water** from the slab lowers the melting temperature of the mantle wedge → it melts **without heating**. Like **salt on an icy sidewalk**.');
  C('melting', 'Are subduction zones hotter than average mantle?', '**No, colder** (cold slabs = ice cubes in a drink). Melting is due to water, not heating.');
  C('melting', 'Volcanoes as mantle samples', 'Ridge lavas sample the **shallow** mantle; hotspot lavas sample the **deep** mantle (different trace-element chemistry).');
  C('melting', 'Number of hotspots; biggest', '~**100–120**; biggest: **Hawaii** and **Iceland** (Iceland = ridge + plume).');

  Q('melting', 'In what three tectonic settings does almost all volcanism occur? Describe the eruptions in each.',
    '1. **Divergent boundaries (mid-ocean ridges)**: mostly **underwater**, **non-explosive** eruptions of **pillow basalt**; ~80% of Earth\'s magma; least dangerous.\n2. **Convergent boundaries (subduction zones)**: volcanic **arcs** (Cascades, Andes, Japan) with the **most explosive and dangerous** eruptions.\n3. **Hotspots (mantle plumes)**, usually intraplate: abundant, gentle mafic eruptions that build **ocean islands** (Hawaii).',
    ['divergent|ridge', 'subduction|convergent', 'hotspot|plume', 'pillow', 'explosive', 'island']);
  Q('melting', 'Most of the mantle is solid. Explain why melting occurs beneath mid-ocean ridges and hotspots.',
    'The **melting temperature of mantle rock increases with pressure** (pressure makes it harder for atoms to break their bonds and become liquid). Beneath ridges (plates pulled apart → mantle rises to fill the gap) and hotspots (buoyant plumes), hot **solid** mantle **rises**. It barely cools, but the **pressure drops**, so its melting temperature falls **below its actual temperature**: it crosses the melting curve and partially melts **without any heat being added**. This is **decompression (pressure-release) melting**.',
    ['pressure', 'melting temperature|melting point|solidus', 'rise|upwell', 'decompression|pressure release|pressure-release', 'without|no heat|not heat']);
  Q('melting', 'Subduction zones are colder than average mantle. Why do they have volcanoes?',
    'The subducting slab carries **water** (in hydrated minerals formed by seawater alteration) and **CO₂** down. As the slab heats at depth, the water is **driven off ("cooked out")** into the hot overlying **mantle wedge**. Water **weakens silicate bonds** and **lowers the melting temperature**, shifting the melting curve to lower temperatures, so the wedge, whose temperature hasn\'t changed, now melts. This is **dehydration (flux) melting**, like **salt melting ice** on a sidewalk.',
    ['water', 'slab', 'wedge', 'lower|reduce', 'melting temperature|melting point', 'dehydration|flux|wet', 'salt|without heat|not hotter']);
  Q('melting', 'Correct this statement: "Subduction-zone volcanoes form because the slab sinks into the hot mantle, heats up, and melts."',
    'Wrong on two counts: subduction zones are **colder** than average mantle (cold slabs cool it, like ice in a drink), and melting is **not** caused by heating. The slab releases **water** into the overlying **mantle wedge**, and water **lowers the wedge\'s melting temperature** so it melts at its existing temperature (dehydration/flux melting). It\'s mainly the **wedge**, not the slab, that melts.',
    ['colder|cold', 'water', 'wedge', 'lower', 'melting temperature|melting point']);
  Q('melting', 'Use a temperature–pressure (phase) diagram to explain the two ways the mantle melts.',
    'Axes: temperature (x), pressure/depth (y, increasing downward). The **melting curve (solidus)** slopes to **higher temperature at greater depth**; solid is on the cool/high-pressure side, liquid on the hot/low-pressure side.\n- **Decompression**: a hot parcel rises **vertically** (same T, lower P) and **crosses the solidus** into the melt field (ridges, hotspots).\n- **Flux/dehydration**: adding **water shifts the solidus to lower temperatures** (left); a rock that was solid now lies on the **melt side** of the wet solidus without moving (subduction zones).',
    ['temperature', 'pressure|depth', 'solidus|melting curve', 'rise|vertical|decompress', 'water', 'shift|left|lower']);
  Q('melting', 'Why do hotspots form islands like Hawaii while mid-ocean ridges mostly don\'t rise above sea level?',
    'Mantle plumes are **hotter** than the shallow mantle under ridges, so the rising plume crosses the melting curve **deeper** and melts over a longer column, producing **more melt** (higher magma flux per area). That builds a **thick pile of volcanic crust**, which by **isostasy** stands high enough to emerge above sea level as an island.',
    ['hotter', 'deeper', 'more melt|more magma', 'thick', 'isostasy']);
  Q('melting', 'Why do transform boundaries have essentially no volcanoes?',
    'At transforms, plates slide **horizontally** past each other. There\'s **no upwelling** of mantle (so no decompression melting, unlike ridges) and **no water being carried down** (so no flux melting, unlike subduction zones). With nothing to make the mantle melt, there is no volcanism. (The movie "Volcano," with lava in LA, is nonsense.)',
    ['horizontal|slide', 'upwell|rise|vertical', 'decompression', 'water', 'no melt|nothing']);
  Q('melting', 'Why are mid-ocean ridge eruptions the least explosive and dangerous?',
    'Ridge magma comes from **decompression melting of dry, shallow mantle**, so it is **mafic**: hot, low-silica, **low viscosity** and **volatile-poor**, and gas escapes easily. Eruptions occur **underwater**, where the high water pressure further **suppresses gas exsolution** and cold seawater quenches the lava into **pillow basalts**, far from people.',
    ['decompression', 'mafic', 'low viscosity|runny', 'volatile|gas', 'underwater|water pressure', 'pillow']);
  Q('melting', 'Why are volcanoes scientifically valuable? What do ridge and hotspot lavas tell us?',
    'Volcanoes are "**messengers from the mantle**": they carry mantle-derived material to the surface, one of the only ways to sample the mantle (~80% of Earth\'s volume). **Mid-ocean ridge basalts** come from passive upwelling of the **shallow** mantle; **hotspot basalts** come from plumes rising from the **deep** mantle near the core. Both are basalts, but their **trace-element chemistry differs**, showing the deep and shallow mantle are chemically different and not fully mixed.',
    ['sample|messenger', 'shallow', 'deep', 'chemistry|chemical|trace', 'mantle']);
  Q('melting', 'How does mantle convection relate to where volcanoes form?',
    'The solid mantle convects to lose heat, and heat transfer is focused into **downwellings (subducting slabs)** and **upwellings (plumes; passive upwelling at ridges)**. Volcanism happens where convection brings mantle **up** (decompression at ridges and plumes) or carries **water down** (flux melting above slabs). So volcanoes mark the up- and downwellings of mantle convection.',
    ['convect', 'slab|downwelling', 'plume|upwelling', 'ridge', 'water']);
  Q('melting', 'Why does mantle rise beneath mid-ocean ridges? Is it pushed up?',
    'No. Spreading is **passive**: plates are pulled apart mainly by **slabs sinking at subduction zones** elsewhere. As the plates separate, mantle must rise to **fill the gap (conservation of mass)**, drawing up shallow mantle that then decompresses and melts. (Plumes, by contrast, rise actively because they\'re hot and buoyant.)',
    ['passive', 'pulled|slab', 'fill|conservation of mass|mass', 'decompress']);
  Q('melting', 'What is the difference between island arcs and continental arcs?',
    'Both are lines of volcanoes on the overriding plate above a subduction zone, parallel to the trench. An **island arc** forms where **ocean subducts beneath ocean** (Japan, Aleutians, Philippines, Marianas). A **continental arc** forms where **ocean subducts beneath a continent** (Cascades, Andes). Continental-arc magmas pass through more felsic crust, so they tend to be **more felsic**; both are explosive.',
    ['ocean', 'continent', 'subduct', 'felsic', 'japan|aleutian|philippine|mariana', 'cascade|andes']);

  /* ======================= L13 MAGMA PROPERTIES ======================= */
  C('magma', 'Magma vs. lava', '**Magma** = molten rock **below** the surface; **lava** = molten rock **erupted** at the surface. Same stuff, different location.');
  C('magma', 'Two most abundant elements in the crust', '**Oxygen** (~half) and **silicon**. 8 elements make ~98% of the crust.');
  C('magma', 'Silicate tetrahedron', 'One **Si** bonded to **four O** (SiO₄) in a tetrahedron. Corner oxygens still want a bond, so tetrahedra **link into chains and sheets**.');
  C('magma', 'Felsic', '**Fel**dspar + **si**lica: **high silica** (>65%), light elements, **low density**, **low melting T**, **high viscosity**, traps gas; continental crust; granite/rhyolite.');
  C('magma', 'Mafic', '**Ma**gnesium + **F**e (iron): **low silica**, heavy elements, **high density**, **high melting T**, **low viscosity**; oceanic crust; basalt/gabbro.');
  C('magma', 'Bowen\'s reaction series (cooling)', '**Mafic minerals crystallize first** (highest T: olivine, pyroxene) → **felsic last** (lowest T: feldspar, mica, quartz).');
  C('magma', 'Bowen\'s reaction series (heating)', '**Felsic minerals melt first** (lowest T) → **mafic minerals melt last**. (Class poll answer: felsic!)');
  C('magma', 'Three rock types', '**Igneous** (frozen magma/lava) · **sedimentary** (eroded grains deposited & cemented) · **metamorphic** (changed by heat/pressure **without melting**).');
  C('magma', 'Intrusive vs. extrusive igneous', 'Intrusive/plutonic: cools **slowly underground** → **coarse** crystals (granite). Extrusive/volcanic: cools **fast at surface** → **fine** grains (basalt).');
  C('magma', 'Two key magma properties', '**Viscosity** (stickiness) and **volatile content** (dissolved H₂O and CO₂).');
  C('magma', 'Three controls on magma viscosity', '**Temperature** (hotter → runnier) · **silica content** (more → stickier) · **crystal content** (more → stickier).');
  C('magma', 'Mafic vs. felsic viscosity analogy', 'Mafic = **melted ice cream** (runny); felsic = **toothpaste** (sticky).');
  C('magma', 'Volatiles and pressure', 'Gas solubility **rises with pressure**. As magma rises, pressure drops, so gas **exsolves into bubbles** (like opening a **shaken soda**).');
  C('magma', 'Which magma traps volatiles?', '**Felsic** (viscous): bubbles get stuck → pressure builds → explosion. Mafic lets gas escape.');
  C('magma', 'Where do magma volatiles come from?', 'Mostly **subducting slabs**: water from seawater-altered minerals and CO₂ from carbonate sediments.');
  C('magma', 'Why do continents stand above sea level?', 'Continental crust is **felsic**, so it is **less dense** and floats higher (isostasy).');
  C('magma', 'Mineral vs. rock', '**Mineral**: naturally occurring, inorganic, crystalline solid. **Rock**: aggregate of one or more minerals.');

  Q('magma', 'Why do oxygen and silicon form silicate tetrahedra, and why does this matter for magma behavior?',
    'O and Si are the two most abundant crustal elements. Silicon needs 4 electrons to fill its outer shell, so it bonds with **four oxygens**, arranged as a **tetrahedron** (maximizing the distance between electron pairs) = SiO₄. Each corner oxygen still needs one more electron, so tetrahedra **bond to metals** (making minerals) or **to each other at their corners**, forming **chains and sheets**. The more silica a melt has, the more linked chains it contains, which makes it **stickier (more viscous)**.',
    ['oxygen', 'silicon', 'four|4', 'tetrahedr', 'chain|sheet|link', 'viscous|viscosity']);
  Q('magma', 'Explain the differences between felsic and mafic rocks and magmas.',
    '- **Felsic** (feldspar + silica): **silica-rich** (>65% SiO₂), lighter elements (Si, O, K, Na), **low density**, **low melting temperature**, cooler magma, **high viscosity**, traps volatiles; typical of **continental crust** and **subduction-zone** magmas (granite, rhyolite).\n- **Mafic** (magnesium + iron): **silica-poor**, rich in **Fe and Mg**, **high density**, **high melting temperature**, hotter magma, **low viscosity**, gas escapes; typical of **oceanic crust**, **ridges and hotspots** (basalt, gabbro).',
    ['silica', 'density|dense', 'melting', 'viscosity|viscous', 'continent', 'ocean', 'iron|magnesium|fe|mg']);
  Q('magma', 'Explain Bowen\'s reaction series. If you heat a rock containing many different minerals, which melt first?',
    'Bowen\'s reaction series is the **order in which minerals crystallize from a cooling magma**: **mafic** (Fe/Mg-rich) minerals like olivine and pyroxene crystallize **first, at the highest temperatures**; **felsic** minerals (feldspar, mica, quartz) crystallize **last, at the lowest temperatures**. Heating reverses the order: **felsic minerals melt first** (lowest melting temperature) and mafic minerals melt last.',
    ['crystalliz', 'mafic', 'first', 'felsic', 'last', 'temperature', 'melt first']);
  Q('magma', 'Name the three factors that control magma viscosity, and explain why each makes felsic magma more viscous than mafic magma.',
    '1. **Temperature**: higher temperature breaks bonds and lets molecules move → lower viscosity. Mafic magmas are **hotter** (mafic material only melts at high T); felsic magmas are cooler → more viscous.\n2. **Silica content**: silicate tetrahedra **link into tangled chains and sheets** (like bread dough or egg whites). Felsic magma has more silica → more viscous.\n3. **Crystal content**: crystals make a thicker slurry. Cooler felsic magma contains mafic minerals that have **already crystallized** (Bowen) → more viscous; hot mafic magma has few crystals.',
    ['temperature', 'silica', 'crystal', 'cooler|hotter', 'chain|tangle|link', 'bowen|crystalliz']);
  Q('magma', 'What are volatiles, why does pressure matter, and how do volatiles behave in felsic vs. mafic magma?',
    '**Volatiles** are gases dissolved in magma, mainly **H₂O and CO₂**. Their **solubility increases with pressure**: deep in the chamber, magma holds lots of gas; as it **rises, pressure drops** and the gas **comes out of solution as bubbles**, like opening a **shaken soda bottle**. In runny **mafic** magma, bubbles **escape easily** → gentle eruptions. In sticky **felsic** magma, bubbles are **trapped**; gas pressure builds until the magma fragments **explosively**.',
    ['h2o|h₂o|water', 'co2|co₂|carbon dioxide', 'pressure', 'bubble|exsolv|out of solution', 'soda', 'trap|escape']);
  Q('magma', 'Why do subduction-zone magmas contain more volatiles than mid-ocean ridge or hotspot magmas?',
    'The subducting slab carries **water** (bound in minerals altered by seawater and in wet sediments) and **CO₂** (in carbonate sediments like limestone) into the mantle. These are released into the mantle wedge, where they trigger melting and dissolve into the magma. Ridges and hotspots melt **dry mantle by decompression**, with no comparable source of water or carbon.',
    ['slab', 'water', 'co2|co₂|carbon', 'seawater|sediment|limestone', 'dry', 'decompression']);
  Q('magma', 'Explain how a magma that starts as wet basalt above a subducting slab ends up felsic.',
    'Water lowers the melting point, so the wedge melt is **cool and wet** (initially mafic). As it rises through **continental crust**, which contains felsic material, it has enough heat to melt only the crust\'s **lowest-melting-temperature components**, and by **Bowen\'s reaction series** those are the **felsic** minerals. The magma **absorbs that silica-rich melt** and becomes increasingly **felsic** by the time it reaches the volcano. (Island arcs have less crust to melt, so they\'re less felsic than continental arcs.)',
    ['cool|cooler', 'wet|water', 'continental crust|crust', 'felsic', 'bowen|melt first|lowest', 'silica']);
  Q('magma', 'How does the combination of viscosity and volatile content determine how explosive an eruption is?',
    'Gas comes out of solution as magma rises and decompresses. **Low viscosity + few volatiles** (mafic, ridges/hotspots): bubbles escape easily, so lava flows out gently. **High viscosity + many volatiles** (felsic, subduction zones): bubbles are trapped, pressure builds until the magma fragments, giving an **explosive** eruption. **More gas** or **stickier magma** → more explosive.',
    ['viscosity|viscous', 'volatile|gas', 'escape', 'trap', 'explosive', 'mafic', 'felsic']);
  Q('magma', 'Describe the three basic rock types.',
    '- **Igneous** ("fire"): solidified magma or lava. **Intrusive/plutonic** (cools slowly underground → coarse crystals, e.g., granite) or **extrusive/volcanic** (cools fast at the surface → fine-grained, e.g., basalt).\n- **Sedimentary**: grains eroded from rocks and carried by water, ice or wind, then deposited and cemented (sandstone, shale).\n- **Metamorphic**: existing rock transformed by **heat, pressure** or fluids **without melting** (shale → schist → gneiss).',
    ['igneous', 'sedimentary', 'metamorphic', 'magma|lava', 'erod|deposit', 'without melting|heat|pressure']);
  Q('magma', 'Why are intrusive igneous rocks coarse-grained and extrusive rocks fine-grained?',
    '**Intrusive (plutonic)** magma freezes **underground**, surrounded by warm rock, so it **cools slowly**, giving crystals time to grow large (coarse-grained granite, El Capitan, East Rock). **Extrusive (volcanic)** lava freezes **at the cold surface** (or in water), so it **cools quickly** and crystals stay tiny (fine-grained basalt, pillow basalts).',
    ['slow', 'underground', 'fast|quick|rapid', 'surface', 'large|coarse', 'small|fine']);
  Q('magma', 'Why does felsic continental crust stand above sea level while mafic oceanic crust lies below it?',
    'Felsic rock is rich in lighter elements (Si, O) and has **lower density** than mafic rock (rich in heavy Fe, Mg). By **isostasy**, lighter, thicker continental crust floats **higher** on the mantle, while denser, thinner oceanic crust sits lower. Without felsic magmas, "we\'d all be swimming."',
    ['felsic', 'density|dense|light', 'mafic', 'isostasy|float']);

  /* ======================= L14 ERUPTIONS & VOLCANO TYPES ======================= */
  C('eruptions', 'Non-explosive eruption styles (mafic)', '**Hawaiian/Icelandic**: fire fountains then **basalt lava flows** · **Strombolian**: short bursts, tens to ~100 m.');
  C('eruptions', 'Explosive eruption styles (felsic)', '**Vulcanian** (short blasts, bombs, 5–10 km) → **Plinian** (sustained gas-driven column, 25–50 km, ~600–700 m/s) → **caldera** (chamber collapse; the biggest).');
  C('eruptions', 'Plinian eruption', 'Named for **Pliny the Younger** (Vesuvius AD 79). Sustained, **gas-driven** column of ash and pumice 25–50 km high; felsic, volatile-rich, subduction zone (Mt. St. Helens 1980).');
  C('eruptions', 'Caldera', 'After a huge eruption **drains the magma chamber**, the volcano **collapses** into it, often driving out more magma (Yellowstone, **Campi Flegrei**).');
  C('eruptions', 'Pahoehoe vs. a\'a', 'Both mafic lava flows. **Pahoehoe**: smooth, **ropy**, runny. **A\'a**: thick, **blocky/rubbly**, slightly more viscous.');
  C('eruptions', 'Pyroclastic flow', 'Ground-hugging avalanche of **hot gas, ash and rock** from a **collapsing eruption column**; ~**300 km/h**; can\'t outrun it (Mt. Pelée 1902: ~30,000 dead in ~10 s).');
  C('eruptions', 'Lahar', '**Volcanic mudflow**: ash + water (rain, rivers, melted snow and ice) → fast "wet cement" down valleys (~50 km/h) (Nevado del Ruiz 1985: >20,000 dead).');
  C('eruptions', 'The two big volcanic killers', '**Pyroclastic flows and lahars**: both from **felsic, explosive, subduction-zone** volcanoes.');
  C('eruptions', 'Shield volcano', '**Broad, gentle slopes** · **mafic**, runny, low-volatile, high-volume lava · hotspots (Hawaii: Mauna Loa, Mauna Kea, Kilauea).');
  C('eruptions', 'Stratovolcano (= composite volcano)', '**Steep, layered cone** of viscous lava + ash + pyroclastics + lahars · **felsic** · subduction zones (Fuji, St. Helens, Mayon, Vesuvius).');
  C('eruptions', 'The three V\'s', '**Viscosity, Volatiles, Volume** control eruption style and volcano shape (focus on viscosity and volatiles).');
  C('eruptions', 'The volcano emoji 🌋 is a…', '**Stratovolcano**, not Hawaii! Hawaii is a shield volcano.');
  C('eruptions', 'Campi Flegrei lesson (reading)', 'A **caldera** near Naples is a bigger danger than famous Vesuvius: no cone, many possible vents, huge population. Know which hazard applies where.');
  C('eruptions', 'Hazard from Hawaiian eruptions', 'Mostly **property** (lava buries roads and towns like Kalapana 1990); you can walk away. Risks: reckless tourists, toxic gas at ocean entries.');
  C('eruptions', 'Tambora 1815 lesson', 'Huge Plinian eruption → pyroclastic flows (~10,000 dead) + **famine** (~100,000) + **global cooling** ("year without a summer," 1816).');

  Q('eruptions', 'Compare non-explosive and explosive eruption styles. What kind of magma produces each, and why?',
    '- **Non-explosive** (Hawaiian/Icelandic fire fountains and basalt lava flows; Strombolian bursts): produced by **mafic** magma, hot, low silica, **low viscosity**, few volatiles, so gas escapes easily and lava flows.\n- **Explosive** (Vulcanian, **Plinian**, caldera): produced by **felsic** magma, cool, silica-rich, **high viscosity**, **volatile-rich**, so gas is trapped until pressure fragments the magma into ash and pumice, sending columns tens of km high.',
    ['mafic', 'felsic', 'viscosity|viscous', 'volatile|gas', 'lava flow|flow', 'plinian|vulcanian|explosive']);
  Q('eruptions', 'Why are subduction-zone volcanoes the most explosive and dangerous? Give the whole causal chain.',
    'Slab carries **water and CO₂** down → water released into the mantle wedge **lowers its melting point** (dehydration/flux melting) → **cool, wet** magma → rising through **felsic continental crust**, it melts the **felsic** (lowest-melting) components (Bowen) → magma becomes **felsic**: high silica + cooler + more crystals = **high viscosity**, plus **lots of volatiles** → as it rises, pressure drops and gas exsolves (shaken soda) but is **trapped** → pressure builds → **explosive** Vulcanian/Plinian/caldera eruptions, **pyroclastic flows, lahars**, steep **stratovolcanoes**.',
    ['water', 'melting point|melting temperature|flux|dehydration', 'felsic', 'viscous|viscosity', 'volatile|gas', 'trap', 'pyroclastic|lahar|plinian']);
  Q('eruptions', 'Why are Hawaiian eruptions gentle even though Hawaii has very active volcanoes?',
    'Hawaii is a **hotspot**: magma comes from **decompression melting** of a hot, **dry** plume, so it is **mafic** (basalt): hot, low-silica, **low viscosity**, with **few volatiles** (no subducting slab to supply water). Any gas bubbles escape easily, so instead of exploding the lava erupts as **fire fountains and flowing lava** (pahoehoe, a\'a). Flows threaten **property**, not usually lives.',
    ['hotspot', 'decompression', 'mafic|basalt', 'low viscosity|runny', 'volatile|gas', 'escape', 'flow']);
  Q('eruptions', 'Compare shield volcanoes and stratovolcanoes: magma, setting, shape, eruptions and hazards.',
    '- **Shield**: **mafic** magma at **hotspots** (Hawaii) and ridges (Iceland). **Broad, gently sloping** because runny, low-volatile, high-volume lava **flows far** before solidifying. Effusive eruptions (lava flows); mainly **property** damage.\n- **Stratovolcano/composite**: **felsic** magma at **subduction zones** (Fuji, St. Helens). **Steep, layered cone** because viscous lava **piles up near the vent**, interlayered ("strata") with ash, pyroclastic and lahar deposits from **explosive** eruptions. Hazards: **pyroclastic flows, lahars, ash**; deadliest.',
    ['shield', 'stratovolcano|composite', 'mafic', 'felsic', 'broad|gentle', 'steep', 'layer']);
  Q('eruptions', 'What are the "three V\'s," and how do they control volcano shape and eruption style?',
    '**Viscosity, volatiles and volume.** Low-viscosity, low-volatile magma (mafic) flows easily and lets gas escape → effusive eruptions; with high **volume** it builds broad **shield** volcanoes. High-viscosity, volatile-rich magma (felsic) piles up and traps gas → explosive eruptions → steep, layered **stratovolcanoes**. Viscosity and volatiles are the key concepts.',
    ['viscosity', 'volatile', 'volume', 'shield', 'strato', 'explosive|effusive']);
  Q('eruptions', 'What are pyroclastic flows and lahars, and why are they the deadliest volcanic hazards?',
    '- **Pyroclastic flows** (nuées ardentes): when an explosive eruption column **collapses** (or blasts sideways), a ground-hugging avalanche of **hot gas, ash and rock** races downslope at ~**300 km/h** and hundreds of °C. It is impossible to outrun and kills everything in its path (Mt. Pelée 1902, ~30,000 in ~10 s).\n- **Lahars**: volcanic **ash and debris mixed with water** (rain, rivers, melting snow and glaciers) become a fast **mudflow like wet cement** (~50 km/h) that follows valleys and buries towns far from the volcano (Nevado del Ruiz 1985, >20,000 dead).\nBoth come from **felsic, explosive, subduction-zone** volcanoes.',
    ['hot', 'gas|ash', 'collapse', 'fast|300|speed', 'water', 'mud', 'felsic|subduction|explosive']);
  Q('eruptions', 'Describe a Plinian eruption: what drives it and why is it so deadly?',
    'A Plinian eruption is a **sustained, gas-driven** explosive eruption of **felsic, viscous, volatile-rich** magma (typically at subduction zones). Volatiles stay trapped until the magma nears the surface, then **exsolve violently**, fragmenting the magma and blasting a column of hot gas, ash and pumice **25–50 km** high at ~600–700 m/s. Column collapse produces **pyroclastic flows**; ash falls widely; it can kill tens of thousands (Vesuvius AD 79, named for Pliny the Younger; Mt. St. Helens 1980).',
    ['felsic', 'gas|volatile', 'sustained|column', '25|50|tens of km', 'pyroclastic', 'vesuvius|pliny|st. helens|st helens']);
  Q('eruptions', 'What is a caldera eruption, and why are calderas like Campi Flegrei considered so dangerous?',
    'A caldera forms when a very large eruption (often Plinian) **empties the magma chamber** and the volcano **collapses into it**; the collapse can drive out still more magma. Caldera eruptions are the **largest** (though rare). Campi Flegrei near Naples is more dangerous than famous Vesuvius because it has **no obvious cone**, could erupt from **many vents**, and **500,000+ people live inside it**. Warning signs include ground uplift, earthquakes and changing gases.',
    ['empt|drain', 'collapse', 'chamber', 'largest|biggest|enormous', 'naples|campi|yellowstone', 'vent|population|people']);
  Q('eruptions', 'Describe pahoehoe and a\'a lava flows. What do mafic lava flows threaten?',
    'Both are **mafic (basaltic)** lava flows typical of Hawaii. **Pahoehoe** is very runny and hardens with a smooth, **ropy** surface; **a\'a** is slightly more viscous, forming thick, **blocky, rubbly** flows. Lava also forms tubes, lakes, and underwater pillows. These flows mainly destroy **property** (Kalapana, Hawaii 1990): they move slowly enough to walk away from, so they rarely kill.',
    ['mafic|basalt', 'ropy|smooth', 'blocky|rubbly', 'property', 'slow|walk away']);
  Q('eruptions', 'A volcano erupts in the Andes of Chile. Predict its magma type, eruption style and volcano shape, and explain your reasoning. Then do the same for a volcano on Réunion Island (a hotspot).',
    '- **Chile (Andes)**: ocean–continent **subduction** (Nazca under South America) → water causes flux melting → magma rises through thick continental crust and melts felsic material → **felsic, volatile-rich** → **explosive (Vulcanian/Plinian)** → steep **stratovolcano**, with pyroclastic flows and lahars.\n- **Réunion (hotspot)**: hot, dry plume → **decompression melting** → **mafic** → **effusive (Hawaiian-style)** lava flows and fire fountains → broad **shield volcano**.',
    ['subduction', 'felsic', 'explosive|plinian|vulcanian', 'stratovolcano', 'hotspot', 'mafic', 'shield', 'decompression']);
  Q('eruptions', 'Why are large explosive eruptions sometimes deadly far beyond the volcano itself (e.g., Tambora 1815)?',
    'Huge Plinian eruptions inject vast amounts of **ash and gas** high into the atmosphere. Ashfall destroys **crops**, causing **famine** (Tambora: ~10,000 killed directly by pyroclastic flows, ~100,000 more by famine), and volcanic gases/aerosols can **cool the global climate** ("the year without a summer," 1816). Volcanic hazards can be global and indirect.',
    ['ash', 'crop|famine', 'climate|cool', 'atmosphere']);
  Q('eruptions', 'A student sends the 🌋 emoji to describe Kilauea in Hawaii. What\'s wrong?',
    'The emoji shows a **steep-sided, cone-shaped stratovolcano**, the kind built by **viscous, explosive felsic** magma at subduction zones (Fuji, St. Helens). Hawaii is a **hotspot** with runny **mafic** lava that flows far and builds broad, gently sloping **shield volcanoes**. Wrong kind of volcano!',
    ['stratovolcano', 'steep', 'shield', 'mafic', 'felsic', 'hotspot']);

  /* ======================= DEEP-DIVE: demos, polls, misconceptions, readings, HW concepts ======================= */
  // L1–3
  Q('energy', 'What are the three lines of evidence for the Big Bang, and what does each show?',
    '- **Dark night sky** (Olbers\' paradox): if the universe were infinite and eternal, every line of sight would hit a star and the sky would glow. It\'s dark, so the universe is **finite in extent and age**.\n- **Galactic redshift** (Hubble, Doppler effect): light from almost all galaxies is shifted to longer wavelengths, so they are **moving away**: the universe is **expanding**.\n- **Cosmic microwave background**: the universe is **3 K, not 0 K**, leftover heat showing it was **hotter in the past** and has been cooling.',
    ['dark', 'finite', 'redshift|doppler', 'expand', 'microwave|3 k|3k', 'cooling|hotter']);
  Q('energy', 'Describe how the solar system and Earth formed, and how that formation left Earth hot inside.',
    '~4.6 Gyr ago a **molecular cloud collapsed under gravity** (perhaps triggered by a supernova shock). Its **spin flattened it into a disk**; the dense hot center became the Sun (fusion above 10⁷ K). In the disk, dust clumped (electrostatically, then by gravity) into planetesimals and planets within ~100 Myr; rocky planets formed close in, gas giants farther out, and the solar wind blew away leftover gas. Earth **accreted** from colliding bodies whose **gravitational PE → KE → heat** on impact (**primordial heat**), and it **differentiated** as iron sank to form the core.',
    ['collapse', 'gravit', 'disk', 'accret|collid', 'heat', 'core|differentiat']);
  Q('energy', 'Where did the elements that make up Earth (Si, Mg, Fe, O, uranium) come from?',
    'From earlier generations of **stars**. Stars fuse H → He and, in big hot stars (red supergiants), progressively heavier elements **up to iron** (O, C, Si, Mg, Fe), which releases energy. Fusion beyond iron **absorbs** energy, so elements **heavier than iron** (including uranium and thorium, the heat-producing radioactive elements) are made in **supernova explosions**.',
    ['star', 'fusion', 'iron', 'supernova', 'heavier']);
  Q('energy', 'Why do our eyes see visible light, and why does it matter that Earth radiates infrared?',
    'The Sun emits most of its energy in the **visible** part of the spectrum, so animals **evolved eyes sensitive to the light that is most available**. Earth, being much cooler, re-radiates energy as **infrared**. That outgoing infrared is what greenhouse gases absorb (the greenhouse effect, covered later), which controls Earth\'s surface temperature.',
    ['visible', 'evolv', 'infrared', 'greenhouse']);
  // L4
  Q('mobile', 'Is the mantle convecting fast or slow? Put its speed in everyday terms, and explain why that slow speed still matters for disasters.',
    'Very slow: **~1–10 cm/yr, about as fast as your fingernails grow** (HW2 estimates of plate speeds: ~4–13 cm/yr). But over millions of years it moves plates thousands of km, and because faults lock, years to centuries of that slow motion can be released **in seconds** during an earthquake (e.g., ~5 m of stored slip after 100 years at 5 cm/yr).',
    ['cm', 'fingernail', 'million', 'lock|stored|released', 'earthquake']);
  // L5–6
  Q('plates', 'What is the difference between Earth\'s compositional layers and its mechanical (strength) layers?',
    '- **Compositional (chemical)**: **crust** (continental felsic / oceanic mafic), **mantle** (silicate rock, ~80% of volume), **core** (iron: liquid outer core, solid inner core).\n- **Mechanical (how it deforms)**: **lithosphere** (crust + uppermost mantle; cold, strong, rigid plates that break brittlely), **asthenosphere** (weaker, solid mantle that flows), deeper mantle (solid, convecting, more viscous), liquid outer core, solid inner core.\nThe plate boundary is a **mechanical** layer boundary (lithosphere), not the crust–mantle boundary.',
    ['crust', 'mantle', 'core', 'lithosphere', 'asthenosphere', 'strength|mechanical']);
  Q('plates', 'Why does the fit of the continents work best at the ~1,800 m depth contour rather than the coastline?',
    'The **coastline** depends on sea level, which changes. The ~1,800 m contour marks the edge of the **continental shelf**, the true **boundary between low-density continental crust and denser oceanic crust**. Matching continents along that boundary (e.g., South America and Africa) gives an astonishingly good fit, showing they were once joined.',
    ['continental shelf|shelf', 'boundary', 'continental crust', 'oceanic', 'sea level']);
  Q('plates', 'What did post-WWII seafloor surveys discover, and how did plate tectonics explain each feature?',
    '- **Mid-ocean ridges** (65,000+ km of undersea mountains): **spreading centers** that sit high because young lithosphere is hot.\n- **Deep trenches** (>11 km, Mariana): where plates **subduct**.\n- **Fracture zones**: **transform faults** offsetting ridge segments (inactive extensions beyond).\n- **Magnetic stripes**: symmetric records of field reversals: **seafloor spreading**.',
    ['ridge', 'trench', 'fracture|transform', 'magnetic', 'spreading', 'subduct']);
  Q('plates', 'Why were global seismic networks built in the 1960s, and how did they help discover plate tectonics?',
    'Not to study earthquakes: they were built during the **Cold War to detect nuclear weapons tests**. As a by-product they gave **accurate earthquake locations and depths**, showing earthquakes concentrated in **narrow belts outlining plate boundaries** and **deep earthquakes along dipping slabs**, key evidence for plate tectonics.',
    ['nuclear', 'cold war|test', 'location|accurate', 'boundar', 'deep']);
  Q('plates', 'Explain East Rock (New Haven) and the Meriden pillow basalts in terms of plate tectonics.',
    'Both formed **~200 Myr ago during the breakup of Pangaea**, when North America rifted away from Africa (a **divergent** setting; the Hartford rift basin). **East Rock** is a **magma sill** (intrusive igneous rock) from that rifting; the **pillow basalts behind the Meriden Target** are lavas that erupted **underwater**, like those at mid-ocean ridges. The seafloor off New England is among the **oldest** (~200 Myr) because that margin formed then.',
    ['pangaea', '200', 'rift|divergent|breakup', 'sill|intrusive', 'pillow|underwater']);
  Q('plates', 'How did the continents move from Pangaea to today?',
    '~220 Myr ago **Pangaea** covered ~40% of Earth, surrounded by the ocean **Panthalassa**. By ~180 Myr it split into **Laurasia** (north) and **Gondwana** (south). ~135 Myr: the North Atlantic opened and India headed toward Asia. ~65 Myr: the South Atlantic opened; Africa met Europe. Today: India has collided with Asia (**Himalaya**). The **Atlantic is growing** (spreading) and the **Pacific is shrinking** (subduction). Reconstructed with paleomagnetism, seafloor ages and continental fit.',
    ['pangaea', 'laurasia|gondwana', 'atlantic', 'pacific', 'india|himalaya']);
  Q('plates', 'Reading (Sevigny, on Tanya Atwater): how did magnetic data reveal the history of the San Andreas Fault?',
    'Offshore California the magnetic stripes were **one-sided**: the eastern half was missing. Atwater realized the **Farallon plate** (the other side of the spreading ridge) had **subducted beneath North America**, taking that half of the pattern with it. Once the Farallon was consumed, the **Pacific plate** touched North America and the boundary became a **transform (San Andreas)**, only ~23 Myr old. It showed plate tectonics explains California\'s earthquakes, mountains and volcanoes.',
    ['farallon', 'subduct', 'stripes|magnetic', 'transform', 'pacific']);
  Q('plates', 'Class poll: Vine and Matthews used magnetic observations in the oceans to discover what? Why was it so important?',
    '**Seafloor spreading.** The symmetric, reversing magnetic stripes parallel to ridges showed new crust forms at ridges and moves away on both sides. Once seafloor spreading was accepted, it supplied the **mechanism Wegener lacked** (continents ride on moving plates), and plate tectonics followed: the "smoking gun."',
    ['seafloor spreading|spreading', 'symmetric|stripe', 'ridge', 'mechanism']);
  // L7
  Q('mantle', 'Describe the corn-syrup demo and the peanut-butter poll. What concept do they illustrate?',
    'Prof. Long dropped rocks into **water** and **corn syrup**: they fell much faster in water. A rock in **peanut butter (~250 Pa·s, the poll answer)** would sink slower still, but it **still sinks** because it\'s denser. The concept: the **sinking speed depends on viscosity**, since viscous drag balances gravity at a terminal velocity. The same physics governs **cold slabs sinking through the very viscous mantle (~10²¹ Pa·s)**, slowly but inevitably.',
    ['water', 'syrup', 'viscosity', 'drag|resist', 'slab|mantle', 'denser|sink']);
  Q('mantle', 'How is viscosity measured in a lab (the two-plate idea), and why are the units Pa·s?',
    'Put a fluid layer between two plates, fix the bottom one, and push the top plate at a steady speed. The **force needed per unit area** to keep it moving at a given speed (for a given gap) is larger for a stickier fluid: F = μ·A·u/y, so μ = (F/A)·(y/u). Force per area is a **pressure (pascal)**, and y/u is a **time (seconds)**, so viscosity is in **pascal-seconds**.',
    ['force', 'area', 'pressure|pascal', 'second', 'plate']);
  Q('mantle', 'Why are tectonic plates rigid even though they are made of the same kind of rock as the flowing mantle beneath?',
    'Because mantle rheology is **temperature-dependent**. The lithosphere is **cold** (it sits at the surface, losing heat), so the same rock becomes extremely stiff, behaves **elastically/brittlely**, and breaks in earthquakes instead of flowing. Deeper, **hotter** mantle has lower viscosity and flows. "Slow as molasses in winter": cold syrup barely moves, warm syrup pours.',
    ['temperature', 'cold', 'stiff|rigid|strong', 'hot', 'flow', 'molasses']);
  Q('mantle', 'HW2 (conceptual): If the mantle was hotter in the past, would plate tectonics have been faster or slower? Why?',
    '**Faster.** Hotter mantle has **lower viscosity**, so the viscous drag on a sinking slab is smaller and the slab reaches a **higher terminal velocity** (sinking speed ∝ density difference ÷ viscosity). Faster-sinking slabs pull plates faster, and convection overall is more vigorous.',
    ['faster', 'lower viscosity|less viscous', 'drag', 'slab']);
  // L8–9
  Q('faults', 'Why were the first global seismic networks and the oldest seismoscope both about direction and location?',
    'The Chinese **seismoscope (~132 CE)** had dragons holding balls above frogs; the ball that dropped showed the **direction** the shaking came from. Modern networks, three-component seismometers recording vertical, N–S and E–W motion at many stations, let us **locate** earthquakes precisely using wave arrival times. Location (with depth) and size are the two basic things we need to know about any earthquake.',
    ['direction', 'seismoscope|dragon|frog', 'locat', 'three|3|component', 'station']);
  Q('waves', 'On a seismogram from a distant earthquake, why does the P wave show up mostly on the vertical component and the S wave on the horizontal components?',
    'Waves from a distant quake travel **deep through the Earth** (where speeds are faster) and arrive **nearly vertically** from beneath the station. P-wave motion is **parallel** to the travel direction, so it appears as **up-and-down** motion. S-wave motion is **perpendicular** to the travel direction, so it appears as **horizontal** motion.',
    ['vertical', 'deep|beneath|below', 'parallel', 'perpendicular', 'horizontal']);
  Q('waves', 'Why do P and S waves travel faster when they go to more distant stations?',
    'Waves to distant stations **dive deeper into the mantle**, where rock is **stiffer** relative to its density, so seismic speeds are higher (P ~5 km/s in crust → ~8 km/s at the top of the mantle and faster deeper), before coming back up. The average speed along the path increases with distance, which is why travel-time curves bend.',
    ['deep|dive', 'mantle', 'faster|speed', 'stiff']);
  Q('waves', 'HW3: wave speed ≈ √(stiffness/density). Explain why this makes intuitive sense, and why sound is much faster in rock than in air.',
    'A **stiffer** material snaps back harder when deformed, so the disturbance is passed on faster: speed goes **up** with stiffness. A **denser** material has more inertia (harder to accelerate, like a box of lead vs. pencils), so speed goes **down** with density. Rock is enormously stiffer than air, much more than it is denser, so sound/P waves travel ~8 km/s in mantle rock vs. ~340 m/s in air.',
    ['stiff', 'dens', 'inertia|accelerat', 'faster|speed']);
  // L9–10
  Q('size', 'Class poll: what is the largest earthquake expected in the Cascadia subduction zone, and how do we know such a size is possible?',
    '**M9.0–9.2** (most of the class guessed 8.1–8.9). Subduction zones are the only boundaries with fault contacts long and wide enough for M9s; Cascadia\'s locked megathrust is ~1,000 km long. Geologic evidence shows it produced an **M~9 in 1700** (Japanese "orphan tsunami" records, ghost forests) and ~41 large quakes in 10,000 years. Sumatra 2004 taught that an M9 can happen at almost any subduction zone.',
    ['9', 'subduction', 'locked|long', '1700|orphan|ghost', 'evidence']);
  Q('size', 'How does an earthquake early-warning system work, and why does it only give seconds to a minute of warning?',
    'It detects the fast but weak **P wave** near the source and immediately estimates the quake\'s size and location, then sends an alert that travels at the speed of electronic signals, faster than the slower, damaging **S and surface waves**. Warning time is only the difference in arrival times (tens of seconds; Schulz: ~30–90 s), enough to stop trains, open elevators, and duck and cover.',
    ['p wave|p-wave', 'faster|fast', 's wave|surface', 'seconds']);
  Q('size', 'What is "soft first story" construction and why is it so vulnerable?',
    'Buildings with an **open ground floor** on columns (parking, storefronts, pools) have little **horizontal strength** at the base. Horizontal shaking (especially **Love waves**) concentrates sideways forces in those columns, which buckle, and the upper floors **pancake** down. Common in older LA-area buildings built before modern codes.',
    ['open|column|ground floor', 'horizontal', 'love', 'collapse|pancake']);
  // L10 / readings
  Q('cases', 'Reading (Schulz, "The Really Big One"): explain the "hand" analogy for how Cascadia stores and releases energy.',
    'Hold one hand flat (Juan de Fuca plate) and slide the other on top (North America). The plates are **locked**, so as Juan de Fuca pushes under, the edge of North America is **squeezed and bulges upward** (the coast rises a few mm/yr and shortens eastward). When the fault finally slips, the bulge **snaps back**: the coast **drops** (up to ~2 m) and **lurches west**. That sudden vertical motion of the seafloor lifts the ocean and launches a **tsunami**. This is **elastic rebound** on a subduction megathrust.',
    ['locked', 'bulge|squeez', 'snap|rebound|release', 'drop|subside', 'tsunami']);
  Q('cases', 'What are "ghost forests," and what do they reveal about subduction earthquakes?',
    'Stands of dead trees along coasts (Alaska after 1964; Washington and Oregon from 1700). In a great subduction earthquake, the coastal land **subsides suddenly** (the bulged plate edge drops), **seawater floods** coastal forests, and the trees die but remain standing for centuries. Their **tree rings** (dendrochronology) date the event (the last ring is from 1699), showing Cascadia\'s last M9 struck in 1700.',
    ['subsid|drop', 'salt|seawater|flood', 'tree ring|dendro', '1700|cascadia']);
  Q('cases', 'Reading (Komatsu, "After the Tsunami"): what physical details of the 2011 Tohoku tsunami illustrate how subduction tsunamis work?',
    'The Pacific plate **thrust beneath Japan**; the **seabed rose** (~25 ft), lifting the whole ocean column above it. The water arrived ~45 minutes later at Kesennuma, first **drawing down** the river and then rising for **~20 minutes**: a sustained surge, not a single breaking wave. It exceeded the 6 m warning and reached second floors. Fires broke out from ruptured fuel tanks, and debris drifted across the Pacific to Alaska and British Columbia.',
    ['thrust|subduct', 'seabed|seafloor|uplift', 'water column|ocean', 'warning', 'surge|rose|minutes']);
  Q('cases', 'Why is the Pacific "Ring of Fire" where most of the largest earthquakes and most dangerous volcanoes occur?',
    'The Pacific Ocean is ringed by **subduction zones** (Chile, Alaska–Aleutians, Kamchatka, Japan, Philippines, Indonesia, Cascadia). Subduction zones have the largest earthquakes (cold, thick plates; huge locked megathrusts in compression) and the most explosive volcanoes (slab water → flux melting → felsic, volatile-rich magma). The Pacific plate itself is being consumed on its northern and western edges.',
    ['subduction', 'largest|biggest', 'explosive', 'water|flux', 'pacific']);
  // L11
  Q('gaps', 'Explain the fridge analogy for stick-slip and how it relates to why earthquakes exist at all.',
    'Push an old fridge that has sat for years: nothing, nothing, nothing, then it **suddenly lurches** once your push overcomes **static friction**. Faults are the same: plates move steadily, but high friction keeps the fault **stuck** while stress builds, then it **slips suddenly**, which is the earthquake. If faults had low friction they would just **creep** smoothly and there would be few large earthquakes.',
    ['friction', 'stuck|stick', 'sudden|lurch', 'stress|push', 'creep']);
  // L12
  Q('melting', 'Class poll: "Which tectonic setting has the most dangerous volcanism, and why?" Explain why each wrong option is wrong.',
    '**Convergent margins (subduction zones)**, because their magmas are felsic and volatile-rich, so eruptions are explosive.\n- Divergent: true that pillow basalt piles build ~7 km of crust, but that\'s **not dangerous**: it\'s underwater and slow-flowing.\n- Hotspots: Hawaii and Iceland do attract clueless tourists, but their eruptions are **gentle** and mafic.\n- Transforms: volcanism there is essentially **absent**, so not dangerous.',
    ['convergent|subduction', 'explosive', 'underwater|pillow', 'gentle|mafic', 'transform|none|absent']);
  Q('melting', 'Why do hotspot volcanoes form age-progressive chains, and how can they measure plate speed?',
    'The plume is **anchored in the deep mantle** (roughly stationary) while the plate **moves over it**. Each volcano forms above the plume, then is carried away and goes extinct as a new one forms, making a chain that gets **older with distance** from the active hotspot (Hawaii → Midway → Emperor seamounts). **Distance between two volcanoes ÷ difference in their ages = plate speed**, and the chain\'s orientation gives the **direction**.',
    ['anchored|fixed|stationary', 'plate moves|moves over', 'older', 'distance', 'age', 'speed|velocity']);
  Q('melting', 'Why don\'t continent–continent collisions like the Himalaya have volcanoes today?',
    'No **oceanic slab** is subducting there anymore (both plates are buoyant continental lithosphere), so no water is being carried down to cause **flux melting**, and there is no upwelling for **decompression melting**. Without either melting mechanism, there\'s no magma supply, though there are large earthquakes from the compression.',
    ['oceanic|slab', 'water', 'flux|dehydration', 'decompression|upwell', 'buoyant|continental']);
  // L13
  Q('magma', 'Class poll: you heat a rock made of many minerals. Which melt first, and why does this matter for subduction-zone volcanoes?',
    '**Felsic minerals melt first** (quartz, feldspar, micas sit at the low-temperature bottom of Bowen\'s reaction series); mafic minerals like olivine melt last. This matters because cool, wet magma rising from the mantle wedge through continental crust can only melt the crust\'s **felsic** components, so the magma becomes increasingly **felsic**: viscous and explosive.',
    ['felsic', 'bowen', 'low|lowest', 'crust', 'viscous|explosive']);
  Q('magma', 'What is the difference between a mineral and a rock? Is ice a mineral?',
    'A **mineral** is a **naturally occurring, inorganic, crystalline solid** with a definite chemistry (quartz = SiO₂, olivine = (Mg,Fe)₂SiO₄). A **rock** is an **aggregate of one or more minerals** (granite = feldspar + quartz + mica). Ice in a **glacier** is a mineral (natural, crystalline); ice cubes from your freezer are **not**, because they\'re not naturally occurring.',
    ['naturally occurring|natural', 'crystalline', 'inorganic', 'aggregate', 'glacier']);
  Q('magma', 'Use the periodic table / Lewis dot reasoning to explain why silicon bonds to four oxygens and why silicate tetrahedra link together.',
    'Atoms "want" a full outer shell like the noble gases. **Oxygen** is two columns from neon, so it needs **2 electrons**; **silicon** is four from the noble-gas column, so it needs **4**. Si bonds with **four O** (the most abundant element), giving SiO₄, arranged as a **tetrahedron** to keep electron pairs far apart. Each O got only one of its two needed electrons, so each corner oxygen **bonds again**, to metals (making minerals) or to **other tetrahedra**, linking into chains and sheets. More silica → more linking → more viscous melt.',
    ['electron', 'four|4', 'two|2', 'tetrahedr', 'link|chain|bond']);
  // L14
  Q('eruptions', 'HW4: Using P ∝ ρw² and energy conservation, explain conceptually why a gas-driven eruption at ~500 MPa can launch material ~25 km high.',
    'Dimensional analysis shows gas pressure scales as **density × velocity²**, so a very high pressure (the rock\'s fracture strength, ~500 MPa) pushing a ~1,000 kg/m³ mixture gives an exit speed of **~700 m/s**. As material rises, its **kinetic energy converts to gravitational potential energy** (½w² = gh), giving a height of ~**25 km**, consistent with **Plinian** columns (25–50 km).',
    ['pressure', 'velocity|speed', '700', 'kinetic', 'potential', 'plinian|25']);
  Q('eruptions', 'Why does Mt. St. Helens look so different from Mauna Loa?',
    '**Mt. St. Helens** is a **stratovolcano** in the Cascade arc (subduction): **felsic, viscous, volatile-rich** magma piles up near the vent and erupts explosively, building a **steep, layered cone** of lava, ash and pyroclastic deposits (until its 1980 Plinian eruption blew off its top). **Mauna Loa** is a **shield volcano** over the Hawaiian hotspot: **mafic, runny, low-volatile, high-volume** lava flows far before solidifying, building an enormous but **gently sloping** edifice.',
    ['strato', 'shield', 'felsic', 'mafic', 'steep', 'gentle|broad', 'subduction|hotspot']);
  Q('eruptions', 'What is the difference between Vulcanian and Plinian eruptions? Why do felsic volcanoes often go through phases?',
    '**Vulcanian** eruptions are **short explosions** (minutes to hours) that "clear the throat": they blast out plugs of viscous lava as **bombs** and ash, with columns ~5–10 km high. **Plinian** eruptions are **sustained, gas-driven** columns 25–50 km high that can last hours to days and spawn pyroclastic flows. As a felsic volcano wakes up, gas-rich magma rises and **depressurizes**; early blasts clear the vent, then sustained exsolution drives a Plinian column, and draining the chamber can trigger **caldera collapse**.',
    ['short', 'bomb', 'sustained', 'gas', 'column', 'caldera']);
  Q('eruptions', 'Reading (Gordon, "The monster beneath"): what warning signs indicate a caldera like Campi Flegrei is heading toward eruption?',
    '**Ground uplift** (the crust bulging; up to 2 m in the 1980s), **increasing earthquakes** as magma and fluids move, **rising fumarole temperatures**, and **gas composition changes** (from H₂S, rotten-egg smell, toward SO₂, which stings the eyes). The **rate of change** matters more than any single value. But crust breaking doesn\'t guarantee an eruption, which makes forecasting and evacuation decisions hard.',
    ['uplift|deformation', 'earthquake|seismic', 'gas|so2|so₂', 'temperature|fumarole', 'rate']);

  // Official key points (from the key-points slides / Midterm #1 study guide), shown as content bullets in the sidebar.
  const keypoints = {
    energy: [
      'Three major energy sources: **interior heat → geological**, **Sun → meteorological**, **orbits → cosmological**.',
      'All trace back to the **Big Bang** and solar-system formation (gravitational PE → KE → heat).',
      'Interior heat = **primordial** (left from formation) + **radioactive decay** (~50/50, 46 TW).',
      'Sun = fusion of **H into He**; 170,000 TW ≈ 4,000× interior.',
      'Sources interact: **tides** (orbital energy → oceans/solid Earth; Io\'s volcanoes).',
      'Work, energy, force, power; **F = ma**; units **J, N, W**; **MKS** units.',
      'Potential, kinetic, heat energy; **energy is conserved**.',
      '**Latent** (phase change, constant T) vs **sensible** heat (changes T); **heat capacity**.'
    ],
    mobile: [
      '**Convection** gives a mobile surface (plate tectonics) and mobile atmosphere (circulation).',
      'Water: **high heat capacity** + **high latent heat**; it "holds" energy and powers storms.',
      'Planetary evolution matters: Earth is **big** (keeps heat) vs. Mars/Moon/Mercury; Venus runaway greenhouse.',
      'Orbit (**habitable zone**, liquid water) and **fast rotation** (Coriolis, 3 cells, jet streams) drive disasters.'
    ],
    plates: [
      'Mantle is **solid rock that flows**: proven by **isostasy** and **post-glacial rebound**.',
      'Plate tectonics = **surface manifestation of mantle convection**; slabs pull plates.',
      '**Lithosphere** (crust + top mantle) is cold → strong → broken into plates.',
      'Cycle: plates **created at ridges**, **destroyed at subduction zones** (~200–250 Myr).',
      'Three boundaries: **divergent, convergent, transform**.',
      'Evidence: continent fit · magnetic stripes · paleomagnetism · hotspot tracks · EQ/volcano belts · deep quakes · seafloor age/depth/sediment · GPS.',
      'Quake size: **divergent smallest, transform middle, convergent largest**.',
      'Convergent types: **ocean–ocean, ocean–continent, continent–continent**; subduction zones = most dangerous.'
    ],
    mantle: [
      '**Viscosity** = resistance to flow, units **Pa·s** (mantle ~10²¹).',
      'Things sink **more slowly in more viscous** fluids (drag balances gravity).',
      '**Convection**: hot rises, cold sinks (lava lamp; know its limits).',
      'Rheology: **viscous** (mantle flow), **brittle** (quakes), **elastic** (seismic waves); Silly Putty.',
      'Controls: **strain rate** and **temperature** (temperature-dependent viscosity).',
      '**Isostasy**: less-dense continents "float" on denser mantle.',
      '**Iceberg**: ~90% under water because ice is only slightly less dense than water.'
    ],
    faults: [
      'Earthquakes occur **mainly on plate boundaries**; boundary type → quake type.',
      'Earthquake = blocks of rock **slip across a fault**, generating **elastic waves**.',
      'Faults: **normal** (extension), **reverse/thrust** (compression), **strike-slip** (shear).',
      '**Hypocenter** (rupture start, with depth) vs **epicenter** (surface point above).',
      '**Elastic rebound**: plate motion builds strain on a locked fault → rupture → rebound → waves.'
    ],
    waves: [
      '**Body waves** (P, S) and **surface waves** (Love, Rayleigh).',
      'Wave properties: **amplitude, wavelength, period, frequency**.',
      'Seismograms record motion in **3 directions** (vertical + 2 horizontal); see P, S, Love, Rayleigh.',
      'Seismic waves are **elastic waves** (Slinky); know each wave\'s motion.',
      '**Locate** quakes from the **S–P delay** at multiple stations (3 circles).'
    ],
    size: [
      'Magnitude scales (**Richter**, **moment**) are **logarithmic**: +1 = **10× shaking**.',
      'Different waves → different ground motion → different damage; **Love waves** worst (horizontal).',
      '**Wave frequency** matters (resonance with buildings).',
      '**Site amplification** (soft sediment shakes more).',
      'Magnitude ≠ intensity (Mercalli = shaking at a place).'
    ],
    cases: [
      'Boundary → fault: **convergent = thrust, divergent = normal, transform = strike-slip**.',
      'Normal: **L\'Aquila 2009**. Strike-slip: **Haiti 2010**. Thrust/subduction: **Chile 1960, Alaska 1964, Sumatra 2004, Japan 2011** (M9+).',
      'Western US/Mexico hazards: **Cascadia, Mexico City, Loma Prieta, San Andreas**.',
      'Don\'t memorize names/dates. **Know the concept each example illustrates.**'
    ],
    gaps: [
      '**Stick-slip** behavior and the **earthquake cycle**.',
      '**Seismic gap** = locked segment loaded by neighbors.',
      'How the **slider-block demo** (1 and 2 bricks) illustrates both.'
    ],
    melting: [
      'Mantle is **solid (!!!)**, convecting; heat focused into **slabs** (down) and **plumes** (up).',
      'Volcanism settings: **divergent ridges**, **subduction zones**, **hotspots**.',
      'Ridges: underwater, **not explosive**, **pillow basalt**.',
      'Hotspots: **more melting** → ocean islands (Hawaii).',
      'Subduction zones: **most explosive and dangerous**.',
      'Melting: **decompression** at ridges/hotspots; **dehydration (water)** at subduction zones.',
      'Ridge lavas sample the **shallow** mantle; hotspot lavas the **deep** mantle.'
    ],
    magma: [
      'Crust is mostly **O and Si** → **silicate tetrahedra**.',
      '**Bowen\'s series**: cooling → mafic first, felsic last; heating → **felsic melts first**.',
      'Rock types: **igneous, sedimentary, metamorphic**.',
      '**Felsic** (more silica) vs **mafic** (less silica).',
      'Two key magma properties: **viscosity** and **volatiles** (H₂O, CO₂).',
      'Viscosity controls: **temperature, silica, crystals**; mafic low, felsic high.',
      'Volatiles **escape mafic** magma; **felsic traps** them.'
    ],
    eruptions: [
      'Felsic: high viscosity + more volatiles → **dangerous**; mafic: low viscosity + fewer volatiles → gentle.',
      'Mafic at **ridges & hotspots**; felsic, volatile-rich at **subduction zones**.',
      'Styles: **non-explosive** (fire fountains, basalt flows, Strombolian) vs **explosive** (Vulcanian, Plinian, caldera).',
      'Flows: **lava** (pahoehoe, a\'a) vs **pyroclastic flows & lahars** (felsic).',
      'Volcanoes: **shield** (mafic, Hawaii) vs **stratovolcano/composite** (felsic, St. Helens, Fuji).',
      'Shape controlled by the **three V\'s**: viscosity, volatiles, volume.'
    ]
  };

  return { topics, cards, questions, keypoints };
})();
