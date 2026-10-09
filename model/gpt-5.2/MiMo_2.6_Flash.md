# GPT-5.2 — findings by MiMo 2.6 Flash

- Source: OpenAI (API `gpt-5.2` = ChatGPT-5.2 Thinking; family: `gpt-5.2-chat-latest` Instant, `gpt-5.2-pro`, `gpt-5.2-codex`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2 — OpenAI's December-2025 Thinking-tier flagship family for professional knowledge work and long-running agents ("the most advanced frontier model for professional work and long-running agents").
- **Short description:** Adaptive-reasoning GPT-5-series frontier model; strengths marketed: GDPval-class knowledge work, long-horizon agents, tool calling, long-context document analysis, vision/chart reasoning, spreadsheets and presentations. Family tiers: **Instant** (`gpt-5.2-chat-latest`, ChatGPT-5.2 Instant), **Thinking** (`gpt-5.2` — this entry), **Pro** (`gpt-5.2-pro`, +$21/$168 pricing); a Codex-optimized `gpt-5.2-codex` shipped shortly after.
- **Provider / access:** OpenAI Responses + Chat Completions API, ChatGPT paid plans; OpenRouter `openai/gpt-5.2` (canonical `openai/gpt-5.2-20251211`, also `:batch` route). **No Free ID** on OpenCode Zen (`noFreeId: true`).
- **Release / knowledge:** released **2025-12-11** (OpenAI "Introducing GPT-5.2"; evals.report confirms 2025-12-11). Knowledge cutoff: not disclosed (OpenRouter `knowledge_cutoff: null`).
- **Context window:** **400,000 tokens** (OpenRouter `context_length` 400000), max output **128,000**; effective window further extended via Responses `/compact` endpoint (official). MRCRv2 evidence to 256K tokens (262,144).
- **Modalities:** **text, image, file in** → text out (OpenRouter architecture block); official appendix additionally reports **Video-MMMU 85.9** → video understood via file input. No audio row, no generation modalities.
- **Reasoning:** adaptive/optional (not mandatory); efforts **none / low / medium / high / xhigh** — xhigh debuted with this release; default effort `medium` (OpenRouter).
- **Pricing (Thinking, as of 2026-10-07):** **$1.75 in / $14.00 out** per 1M, cached input **$0.175** (90% cache discount). **Pro:** $21 / $168. Priced above GPT-5.1 ($1.25/$10) — OpenAI: higher per-token but lower cost-per-quality via token efficiency.
- **Architecture:** proprietary; parameter count not published.

### Raw benchmarks found

> Primary: OpenAI official announcement "Introducing GPT-5.2" (2025-12-11) — Thinking column
> at xhigh/max reasoning unless noted. Secondary: evals.report (47 tracked scores, launch-day
> official + labeled unverified rows), OpenRouter model metadata (AA index, arenas).
> Thinking tier unless marked Pro.

Tool use / agents (official):

- τ²-bench Telecom: **98.7%** (new SOTA in-blog; GPT-5.1 95.6); Retail: 82.0%.
- BrowseComp: **65.8%** (Pro **77.9%**; GPT-5.1 50.8); BrowseComp Long Context 128k: **92.0%**, 256k: **89.8%**.
- Scale MCP-Atlas: **60.6%** (GPT-5.1 44.5); Toolathlon: **46.3%** (GPT-5.1 36.1).
- GDPval wins-or-ties: **70.9%** (Pro 74.1%; first model at/above human-expert level per OpenAI); GDPval Elo 1467 (evals.report, official).
- OSWorld: 47.3% (evals.report, *Unverified*); GAIA: 40.3% (Unverified); BFCL: 55.87% (official); METR 50% time horizon: **352.2 min** (official); Remote Labor Index: 2.5% automation (official); PostTrainBench: 21.38%.
- In-vendor: investment-banking spreadsheet internal 68.4% (GPT-5.1 59.1).

Reasoning / knowledge (official):

- GPQA Diamond (no tools): **92.4%** ✓ (Pro **93.2%**; GPT-5.1 88.1%). evals.report lists 91.4% official — catalog/blog discrepancy flagged.
- HLE (no tools): **34.5%** ✗ under the 40% ref (Pro 36.6; GPT-5.1 25.7); **HLE (w/ search + Python): 45.5%** (Pro 50.0) — with-tools form clears the ref.
- AIME 2025 (no tools): **100.0%**; HMMT Feb 2025: 99.4%; AIME 2026: 98.33%; MathArena HMMT Feb 2026: 96.97% (evals.report).
- FrontierMath Tier 1–3 (w/ Python): **40.3%** (GPT-5.1 31.0); Tier 4: **14.6%** (evals.report shows 18.8% — condition mismatch flagged).
- ARC-AGI-1 (Verified): 86.2% (Pro **90.5%**, first past 90); ARC-AGI-2 (Verified): **52.9%** (Pro 54.2) — SOTA for CoT models at launch.
- MMMLU 89.6%; MMLU-Pro 85.9%; Global-MMLU 89.8%; LiveBench 74.84; SimpleQA Verified 38.9%; EnigmaEval 10.39% (evals.report).
- **Artificial Analysis Intelligence Index:** launch-era **51.3** (evals.report, *Unverified*, Dec 2025) → current reading **30.4** (OpenRouter AA block; AA scale re-based since — corrected for methodology change, not model drift).
- Epoch Capabilities Index: 153.7 (evals.report, official).

Coding (official):

- SWE-bench Verified: **80.0%** (GPT-5.1 76.3) — OpenAI "new high" at launch.
- SWE-Bench Pro (public): **55.6%** (GPT-5.1 50.8, blog SOTA); evals.report's 29.94% is the harder full set — both flagged.
- SWE-bench Multilingual: 66.7% (evals.report, official); SWE-Lancer IC Diamond: 74.6% (GPT-5.1 69.7).
- LiveCodeBench: 89.4% (Unverified); LiveCodeBench Pro: **2393 Codeforces Elo** (official); SciCode: 46.2% (Unverified — under the 55 ref).
- WeirdML 72.2%; Vibe Code Bench 53.5%; GSO Opt@1 27.45% (evals.report).

Long context (official, OpenAI MRCRv2, 8-needle, max reasoning):

- 4k–8k **98.2%**, 8k–16k 89.3%, 16k–32k 95.3%, 32k–64k 92.0%, 64k–128k 85.6%, **128k–256k 77.0%** (GPT-5.1: 65.3→29.6 collapse).
- Official claim: first model near-100% on the 4-needle MRCR variant out to 256K; GraphWalks bfs <128k 94.0%, parents <128k 89.0%.
- BrowseComp Long Context 128k 92.0 / 256k 89.8 (tool-using retrieval over long inputs).

Multimodal / vision (official appendix):

- CharXiv reasoning w/ Python: **88.7%** (no tools 82.1; GPT-5.1 80.3); MMMU-Pro w/ Python: **80.4%** (no tools 79.5).
- Video-MMMU (no tools): **85.9%**; ScreenSpot-Pro (w/ Python): **86.3%** (GPT-5.1 64.2 — UI/screen understanding "error rates roughly halved").
- OCRBench v2: 50.5; ZeroBench: 17.0% pass@5 (evals.report).
- Audio: no rows found.

Other (evals.report, verified): LMArena 1411, WebDev Arena 1404, Search Arena 1210, Design Arena 1224, EQ-Bench v3 1783; Vectara hallucination 10.8%; MASK honesty 86.67; factuality: ChatGPT answers without errors 93.9% (w/ search) / 88.0% (no search).

### Normalized scores (1–100)

- **Tool use: 84/100.** τ²-bench Telecom 98.7 (ref-clearing SOTA), Retail 82, BrowseComp 65.8 with long-context variants at ~90, MCP-Atlas 60.6, GDPval 70.9% and METR 352 min show real long-horizon work; held down by Toolathlon 46.3, OSWorld 47.3 (unverified), GAIA 40.3 (unverified), BFCL 55.87 — the computer-use/long-tail agent rows are mid-tier.
- **Reasoning: 86/100.** GPQA 92.4 ✓ and AIME-2025 100 / FrontierMath 40.3 / ARC-AGI-2 52.9 are elite; but HLE no-tools 34.5 misses the 40 ref (45.5 only with search+Python), and the AA Index reads 51.3 launch-era → **30.4 on today's re-based scale** ✗ (vs 60 ref) — strong math/abstract reasoning, sub-ref open-book science.
- **Context window: 93/100.** 400K native (128K out) + `/compact` extension; MRCRv2 holds 77–98% across the full 4K→256K ladder (near-100% 4-needle claim to 256K), BrowseComp-LC 89.8 at 256K — best long-context evidence set in this tier; no published rows beyond 256K/inside 400K headroom → 93.
- **Multimodal: 71/100.** Text + image + file (incl. video) in, text out: Video-MMMU 85.9, MMMU-Pro 80.4, CharXiv 88.7, ScreenSpot-Pro 86.3 are strong image/video-understanding rows (video band 75–90 applies to the video row); no audio input, no output-generation modalities, no PDF-specific rows → capped at 71.
- **Coding: 85/100.** SWE-bench Verified 80.0 and SWE-Pro (public) 55.6 were launch SOTA, LCB 89.4 / LCB-Pro 2393 Elo strong, SWE-Lancer 74.6 solid; discounted for SciCode 46.2 (under the 55 ref), SWE-Pro full-set 29.94, GSO 27.45, and no Terminal-Bench row this cycle — frontier-2025 coding, not frontier-2026.
- **Cost efficiency: 74/100.** $1.75/$14.00 with $0.175 cache reads sits between the $1.25/$4.25 ≈ 88 tier and the $3/$15 ≈ 60 anchor — better in-price than the anchor, near-anchor out-price; Pro tier ($21/$168) is punitive but optional; proprietary/hosted-only.
- **Overall Score: 84/100.** (84+86+93+71+85)/5 = 83.8 → 84 — a professional-work flagship whose long-context ladder (77%+ through 256K), τ² 98.7, and SWE-V 80 still read elite, with HLE-no-tools, today's AA scale, and dated-by-now coding rows keeping it at the 84 line.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research — DuckDuckGo HTML (recovered from earlier CAPTCHA blocks) → OpenAI official "Introducing GPT-5.2" (full benchmark appendix), evals.report catalogue (47 rows incl. AA Index and METR), OpenRouter model API (specs, current AA 30.4, arena Elos); scores are normalized 1–100 interpretations, not official vendor scores; AA Index launch-era vs current re-based readings both reported.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# GPT-5.2 — findings by Mimo v2.6 Flash

- Source: OpenAI/`gpt-5.2`
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.2
- **Short description:** OpenAI's 2025-12-11 flagship (released ~4 weeks after GPT-5.1), shipped in three API flavors — GPT-5.2 Thinking (`gpt-5.2`, five reasoning levels none→x-high), GPT-5.2 Instant (`gpt-5.2-chat-latest`) and GPT-5.2 Pro (`gpt-5.2-pro`) — with SOTA claims on GDPval, ARC-AGI-1/2 and coding. Not a variant/alias of another entry in this dataset.
- **Provider / access:** OpenAI Responses API + Chat Completions (`https://api.openai.com/v1`); aggregator rows via Requesty/OpenRouter/llm-stats. Responses/compact endpoint compresses over-length conversations instead of truncating.
- **Release / knowledge:** released 2025-12-11; knowledge cutoff 2025-08-31 (OpenAI via DeepLearning.AI; llm-stats says 2025-08-25 — both = Aug 2025).
- **IDs:** `gpt-5.2`, `gpt-5.2-chat-latest`, `gpt-5.2-pro`. **No OpenCode Zen Free ID found** — scored on paid API pricing (Thinking lane).
- **Context window:** 400,000 tokens input, 128,000 max output (OpenAI spec row via DeepLearning.AI; llm-stats agrees).
- **Modalities:** text + image in; text out; reasoning yes (none/low/medium/high/x-high); tool calling, prompt caching. Video/audio input not verified for the API (Video-MMMU appears as an evaluated benchmark only).
- **Pricing (as of 2026-10-01):** $1.75 / 1M input, $14.00 / 1M output (OpenAI list via AA/llm-stats); 3:1 blended ≈ $4.81–5.19 / 1M. Paid tier only — no free API tier verified.
- **Architecture:** proprietary, closed weights (llm-stats: "Proprietary, Closed source"); parameter count not published.

### Raw benchmarks found

> Measured numbers with (source, rank/percentile, harness) for traceability. Missing rows = no verified public score found.

Agent / tool use:

- GDPval (wins/ties vs domain professionals, 44 occupations): **70.9%** (OpenAI; vs GPT-5's 38.8%)
- τ²-Bench: **85** (AA via 44B normalized row); τ²-Bench Telecom: **98.7%** (OpenAI/llm-stats)
- Terminal-Bench Hard: **47** (AA via 44B); Terminal-Bench 2.0/2.1: **no verified public score found**
- SWE-Lancer IC Diamond: **74.6%** (OpenAI); ScreenSpot-Pro (UI understanding): **86.3%** (OpenAI)
- OSWorld / MCP-Atlas / Claw-Eval / Toolathon: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** Thinking / **93.2%** Pro (OpenAI); **90** (AA via 44B)
- AIME 2025 (no tools): **100.0%** (OpenAI; AA row **99**); HMMT 2025: 99.4% (llm-stats)
- FrontierMath T1–3: **40.3%**; T4: **14.6%** (OpenAI)
- ARC-AGI-1 (Verified): **86.2%** Thinking / 90.5% Pro; ARC-AGI-2 (Verified): **52.9%** Thinking / 54.2% Pro (OpenAI)
- HLE: **34.5%** Thinking / 36.6% Pro (glbgpt vendor table); **35** (AA via 44B)
- MMLU-Pro: **87** (AA via 44B); BrowseComp: 65.8% (llm-stats)
- AA Intelligence Index: **73** at x-high, tying Gemini 3 Pro Preview (DeepLearning.AI, Dec-2025 index v4); **42.2** at x-high on AA's current recalibrated scale (44B, Aug 2026) — cite both, scales differ by version
- AA Coding Index: **62** at x-high, tying Gemini 3 Pro Preview high (DeepLearning.AI)

Coding:

- SWE-bench Verified: **80.0%** (OpenAI; benchmark made this the model's "new high")
- SWE-Bench Pro (public): **55.6%** (OpenAI; vs GPT-5.1 Thinking 50.8%)
- LiveCodeBench: **89** (AA via 44B); SciCode: **52** (AA via 44B)
- DeepSWE / Vibe Code Bench: **no verified public score found**

Long context:

- OpenAI MRCRv2 (8 needles): **98.2%** @4–8k, 95.3% @16–32k, 85.6% @64–128k, **77.0%** @128k–256k (OpenAI)
- GraphWalks BFS <128k: **94.0%**; parents <128k: 89.0% (OpenAI); BrowseComp Long Context 128k: 92.0%

Multimodal:

- CharXiv Reasoning (w/ Python): **88.7%** (OpenAI); Video-MMMU: **85.9%**; MMMLU: **89.6%** (OpenAI)
- Image input supported (spec rows); no MMMU main score or audio input found

### Normalized scores (1–100)

- **Tool use: 78/100.** GDPval 70.9% wins/ties, τ²-Bench 85 and τ²-Bench Telecom 98.7% are upper-mid to strong, but Terminal-Bench Hard 47 sits at the bottom of the mid band (TB 45–60 → 50–70) and no OSWorld/MCP-Atlas row exists — composite lands at 78.
- **Reasoning: 89/100.** GPQA 92.4% and AIME 100% are in the frontier band (90+ → 90–100), FrontierMath T1–3 40.3% and ARC-AGI-2 52.9% are standout; HLE 34.5% (frontier 40+ → 90–100) and AA Index 73/42.2 (scale-version dependent) are the only caps → 89.
- **Context window: 82/100.** 400K sits in the 200K–500K tier (65–84), pushed to its top by unusually strong measured retrieval (MRCRv2 77% at 128k–256k, GraphWalks 94%) — the band ceiling stops it at 82.
- **Multimodal: 65/100.** Text + image in — spec rows confirm image input but no PDF/video/audio input modality and no non-text output. CharXiv 88.7 and Video-MMMU 85.9 are strong vision evaluations but do not widen the input band: image-in only = 60–70 per methodology, scored 65.
- **Coding: 88/100.** SWE-bench Verified 80.0% clears the DeepSWE-74% frontier anchor, LiveCodeBench 89 is elite, SWE-Bench Pro 55.6% is a top-tier result; SciCode 52 (<55% ref) and AA Coding Index 62 (<70 ref) keep it just out of the 90s.
- **Cost efficiency: 65/100.** $1.75/$14 sits between the ~$1.25/$4.25 ≈ 88 anchor and the $3/$15 ≈ 60 anchor, closer to the expensive side on output; 3:1 blended ≈ $5/1M.
- **Overall Score: 80/100.** (78 + 89 + 82 + 65 + 88) / 5 = 80.4 → 80 — best-fit as a near-frontier flagship for science/math reasoning and serious coding with measured long-context retrieval; capped by Terminal-Bench-class agentic reliability, image-only multimodal input and $14 output pricing.

---

## Signature

- Provided by: **Mimo v2.6 Flash (opencode/mimo-v2.6-flash-free)** — 2026-10-01
- Method: public internet research (OpenAI "Introducing GPT-5.2" post, DeepLearning.AI The Batch coverage, Artificial Analysis rows via Requesty/44B normalization pages, the-decoder benchmark table, llm-stats shared-benchmark tables, glbgpt vendor table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

