# Cat Jam — findings by MiMo 2.6 Flash

- Source: undisclosed stealth publisher / OpenCode (`opencode/cat-jam-free`; evaluated route OpenCode Zen + Vercel AI Gateway `stealth/cat-jam`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Cat Jam (served as "Cat Jam Free"; Vercel/Gateway ID `stealth/cat-jam`)
- **Short description:** Anonymous stealth reasoning model for coding and agentic workflows, in free preview on OpenCode Zen/Go since 2026-10-13 ("very fast — built for agentic coding", official @opencode announcement). No vendor has claimed it — treat as an alias-style entry whose identity can rotate or disappear without notice. Not a variant of any catalogued entry; community speculation it could be Reflection's Beam is unconfirmed and weakened by OpenCode listing `beam-free` as a separate model.
- **Provider / access:** OpenCode Zen `opencode/cat-jam-free` (Chat Completions, `https://opencode.ai/inference/v1`, per pi.dev registry config); OpenCode Go `opencode-go/cat-jam-free` (API in 3 formats; free models require a Go plan but don't consume plan quota); Vercel AI Gateway `stealth/cat-jam` (OpenAI Chat Completions + Responses and Anthropic Messages via base-URL swap); Command Code `stealth/cat-jam:free`. Caveat: absent from my 2026-10-16 `opencode.ai/zen/v1/models` snapshot (that endpoint appears to serve a subset/rotating lane — presence instead verified via models.dev-derived registries, pi.dev config, and freetokens' live check "works · Oct 13").
- **Release / knowledge:** Registry entry 2026-10-12 (modelbenchmark.io, aifree.dev); public announcement 2026-10-13 (@opencode); Vercel AI Gateway + Command Code listings 2026-10-15. Knowledge cutoff not posted.
- **IDs:** `opencode/cat-jam-free`, `opencode-go/cat-jam-free`, `stealth/cat-jam`. No paid/free distinction — the model itself is $0 across lanes. (Repo `meta.json`'s scaffolded `opencode/cat-jam` does not match any live ID; meta left untouched, flagged for orchestrator.)
- **Context window:** **conflict, timeline-reconciled** — 1,048,576 exact (pi.dev structured config), "1M" (Vercel provider table, modelbenchmark "most-agreed"), 1.05M (commandcode) vs 262,144 (models.dev registry as quoted by aifree.dev and freetokens.fyi, both dated 2026-10-13). Most plausible reading: 262K at Oct 13 launch, raised to 1M for the Oct 15 gateway listings. Scored at 1M with the conflict flagged. Max output 131,072 (all sources agree — no caveat).
- **Modalities:** text in → text out (pi.dev `input: ["text"]`, modelbenchmark "text-only", aifree "no image/attachment input"); reasoning effort low/medium/high/xhigh/max (pi.dev thinking map, aifree); tool calling + structured JSON strict mode (pi.dev compat flags, Vercel tool-calling example); freetokens notes images are "accepted, unreliable — image via agentic tool-use, not native vision".
- **Pricing (as of 2026-10-16):** $0 in / $0 out / $0 cache on all lanes — Zen (in-app only, no account; raw API returns `403 FreeTierError`), Go (plan-gated), Vercel (free users get $5 credits/30d; **prompts/responses may be used for training**), Command Code ("free while the deal runs"). No announced end date; stealth previews are time-limited by nature.
- **Architecture:** undisclosed proprietary (closed weights; "Open weights: no" per modelbenchmark).

### Raw benchmarks found

Agent / tool use:

- GRID BLOTTO (Artificial League strategy-game benchmark): **3W–4L**, **43%** win rate, **47%** territory share, avg. reasoning **52 s**, read-of-game error **36 p.p.**, 2 invalid orders over 7 matches (2026-10-15/16; max effort) — losses to Claude Haiku 5.5, DeepSeek V4.1 Flash, Step 5, MiMo 2.6 Pro; wins over SpaceBunny Alpha, Longcat 2.5, 6 Luna (https://artificial-league.com/models/cat-jam/)
- Terminal-Bench 2.1 / Tau3-Banking / Tau2-Bench / GDPval-AA / OSWorld / MCP-Atlas / Toolathon: no verified public score found
- Speed (not a benchmark): 403 tps P50 throughput, 0.4 s TTFT, 97% cache hit (Vercel live traffic); 300+ tok/s in early r/opencode tests (aifree.dev)

Reasoning / knowledge:

- GPQA Diamond / HLE / LCR / CritPt / BenchLM overall: no verified public score found
- Artificial Analysis Intelligence Index: no verified public score found — **AA not yet ranking it** (freetokens.fyi; commandcode.ai shows "Intelligence index — not yet scored")

Coding:

- SWE-bench Verified / LiveCodeBench / SciCode / Vibe Code Bench / AA Coding Index / Aider: no verified public score found (commandcode.ai: "Coding index — not yet scored"; modelbenchmark.io lists none; Fellipe Soares' 5-benchmark stealth suite predates Cat Jam and did not test it)

Long context:

- No MRCR / RULER / GraphWalks retrieval-at-length published (1M claimed, unmeasured).

### Normalized scores (1–100)

- **Tool use: 52/100.** Tool calling + strict structured-JSON outputs are registry-verified across pi.dev, Vercel, and aifree, and the official positioning is explicitly agentic coding — but zero Terminal-Bench/Tau3/GDPval/OSWorld rows exist, and the only measured agent-style number, the Artificial League GRID BLOTTO record (3W–4L, 43%), is a planning game, not tool use. Mid-band floor with verified plumbing; capped by no methodology tool benchmark.
- **Reasoning: 50/100.** Reasoning mode with five effort levels (low→max) is verified, but there is not a single GPQA/HLE/LCR/CritPt measurement and AA has not ranked it — the 43% arena win rate against a mid-tier field (lost to Haiku 5.5, DeepSeek V4.1 Flash, Step 5, MiMo 2.6 Pro; beat SpaceBunny, Longcat 2.5, 6 Luna) is the only quality signal. Conservative mid floor reflecting verified reasoning capability, not a measurement.
- **Context window: 95/100.** Majority-verified ≥1M total (pi.dev exact 1,048,576 + Vercel 1M + modelbenchmark "most-agreed 1M" + commandcode 1.05M) puts it in the ≥1M tier (95–100); held at the band floor because no retrieval-at-length is published **and** the 262,144 figure from the models.dev registry (dated 2026-10-13) conflicts — if 262K is the current truth, this dim drops to ~76 (200K–500K band).
- **Multimodal: 15/100.** Text-only in/out (pi.dev, modelbenchmark, aifree all agree; freetokens' "images accepted" note explicitly says image goes "via agentic tool-use, not native vision") — text-only floor band (10–20).
- **Coding: 55/100.** Rests entirely on official positioning ("built for agentic coding" — @opencode; Vercel: "combining strong coding capabilities with fast, low-latency inference") plus verified tool/JSON support and heavy agent-harness adoption; capped low because **every** coding benchmark row is "not yet scored" (AA Coding Index, commandcode) and no SWE-bench/LiveCodeBench/SciCode/Aider number exists for this ID anywhere.
- **Cost efficiency: 100/100.** $0 input / $0 output / $0 cache on all three lanes (Zen in-app, Go, Vercel); caveats: time-limited stealth preview with no announced end, Vercel explicitly permits training on prompts/responses, Zen's free lane is app-only (raw API 403s), Go lane needs a $10/mo plan. Not counted in Overall.
- **Overall Score: 53/100.** Mean of the five non-cost dims (52 + 50 + 95 + 15 + 55) / 5 = 53.4 → 53. Best-fit: zero-cost, very fast stealth coding agent for non-sensitive work inside OpenCode/Vercel where an unmeasured-but-plausible agentic model is acceptable — not for reproducible evaluations, vision tasks, confidential code, or anywhere you need a named vendor and published benchmarks; identity can change or vanish without notice.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-16
- Method: public internet research across 7+ independent sources — pi.dev registry config (https://pi.dev/models/opencode/cat-jam-free), freetokens.fyi live channel check (https://freetokens.fyi/models/cat-jam), Vercel AI Gateway model page (https://vercel.com/ai-gateway/models/cat-jam), modelbenchmark.io (https://modelbenchmark.io/models/cat-jam-free), commandcode.ai (https://commandcode.ai/models/cat-jam-free), Artificial League match record (https://artificial-league.com/models/cat-jam/), aifree.dev announcement coverage (https://aifree.dev/news/opencode-cat-jam-stealth-model-free); conflicts compared (context 262K vs 1M timeline-reconciled; release date Oct 12/13/15 reconciled; Beam-speculation flagged as unconfirmed). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

