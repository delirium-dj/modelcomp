# Inkling Small — findings by Qwen 3.8 Flash

- Source: Thinking Machines Lab / Inkling-Small (curated id `opencode/inkling-small`)
- Date: 2026-10-04 (UTC); second pass 2026-11-03 (UTC) — vendor launch pricing verified ($0.30 in / $1.20 out Tinker serverless; Inkling sibling $1.00/$4.05); `:free` route still live but now explicitly **agentic-harness-only**; AA Index cascade 40→25.7→13 logged un-averaged (v5.0 rebuild); no successor announced; bands unchanged
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling Small (`Inkling-Small`)
- **Short description:** Open-weights 276 B-total / 12 B-active Mixture-of-Experts released ~2026-08-22 as the efficient sibling of Inkling, with native audio + image reasoning, variable thinking effort and a 1M window; pitched at cost-efficient coding/tool-use workflows. **Variant flag:** sibling of `model/Inkling/` (975 B/41 B active) — same architecture family, different weights, so scored separately.
- **Provider / access:** Thinking Machines Tinker playground (`https://tinker.thinkingmachines.ai/playground`); weights on Hugging Face `thinkingmachines/Inkling-Small`; hosted on Together AI (`thinkingmachines/Inkling-Small`, Chat Completions) and OpenRouter (`thinkingmachines/inkling-small`, plus a `:free` route in the OpenRouter free collection).
- **Release / knowledge:** released 2026-08-22 (two weeks after Inkling); knowledge cutoff not disclosed in the launch post I read.
- **IDs:** `thinkingmachines/Inkling-Small` (HF), `thinkingmachines/inkling-small` and `thinkingmachines/inkling-small:free` (OpenRouter), Together AI `Inkling-Small`; curated site id `opencode/inkling-small`.
- **Context window:** up to 1,000,000 tokens (vendor launch post; OpenRouter/command-code listings agree; coding evals were run with a 256 K trajectory cap). Max output not stated on the pages I found.
- **Modalities:** text + image + audio in (encoder-free: audio as dMel spectrograms, images as 40×40-pixel patches), text out; reasoning yes with adjustable effort (0–1, benchmarked at 0.99); tool calls yes (MCP Atlas / Toolathlon measured). No video input or audio output claimed.
- **Pricing (as of 2026-10-04):** $0.50 in / $1.20 out per 1M with $0.10 cached on aggregators (commandcode.ai listing); a $0 `:free` route exists on OpenRouter (time-limited, training/monitoring caveats apply). Open weights mean self-host is the cheap long-term path.
- **Architecture:** 276 B total / 12 B active sparse MoE transformer, encoder-free natively multimodal, trained on NVIDIA GB300 NVL72; open weights (HF).

### Raw benchmarks found

Vendor table from the Thinking Machines launch post "Inkling-Small" (all evals at effort 0.99, temp 1.0), cross-checked with BenchLM `inkling-small` (overall **55.12/100, #67 of 783**, coverage partial), Artificial Analysis and Vals AI.

Agent / tool use:

- Terminal-Bench 2.1: **64.7 %** (vendor best harness) / **55.1 %** (Vals AI)
- MCP Atlas: **79.6 %** public (79.2 % all) — ahead of Inkling's 78.8 %
- Toolathlon-Verified: **54.4 %**; BrowseComp: **77.4 %** (with context management)
- GDPval-AA v2: **1269 Elo** (vendor) / **1191** (Artificial Analysis, 30.4 % normalized); AA Agentic Index **24.9 %**
- τ³-Banking: **15.5 %** (8.4 k→5.1 k output tokens/task — the most token-efficient in its comparison set)
- AA-Briefcase: **917 Elo**; Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **89.5 %** (Vals AI 83.6 %); MMLU-Pro: **85.6 %** (Vals)
- HLE: **31.6 %** text-only, **47.8 %** with tools (vendor says it beats Inkling's 29.7 % at every thinking budget)
- ARC-AGI-1: **84.0 %**; ARC-AGI-2: **40.1 %**
- AIME 2026: **95.5 %**; HMMT Feb 2026: **90.2 %**; CritPt: **8.3 %**
- Artificial Analysis Intelligence Index (v4.1): **40** (v4.3.2 card shows 25.7 on the tracked non-max configuration)
- AA-Omniscience: accuracy **33.2 %**, hallucination rate **63.0 %**, index −8.9 — knowledge calibration is the weak spot

Coding:

- SWE-bench Verified: **80.2 %** (Vals AI 82.2 %); SWE-bench Pro: **55.9 %**
- LiveCodeBench (Vals): **85.9 %**; SciCode: **48.7 %** (AA-SciCode 49.7 %); AA Coding Index **53.0 %**

Multimodal / long context:

- MMMU-Pro: **74.0 %**; CharXiv: **77.4 %** plain / **81.3 %** with Python (cropping/zoom tooling)
- Audio MC: **54.9 %**; MMAU: **77.0 %** — vendor positions it against specialist omni models
- Long context: AA-LCR **75.7 %** at the 1M window; no MRCR/RULER figure found on the pages checked

### Normalized scores (1–100)

- **Tool use: 72/100.** MCP Atlas 79.6 %, Toolathlon 54.4 % and BrowseComp 77.4 % are strong-to-frontier for open weights, and GDPval-AA 1269 tops most peers; capped by Terminal-Bench 64.7 % (vs the 88 %+ frontier ref) and τ³-Banking 15.5 %.
- **Reasoning: 84/100.** GPQA 89.5 %, HLE 31.6 %/47.8 % with tools, ARC-AGI-1 84.0 % + ARC-AGI-2 40.1 % and Index 40 sit in the upper band; capped by a very weak knowledge calibration profile (Omniscience accuracy 33.2 %, hallucination 63.0 %) and CritPt 8.3 %.
- **Context window: 92/100.** A genuine 1M window with AA-LCR 75.7 % lands in the ≥1M tier; it misses 95+ because no ≥98 % retrieval measurement at 512 K+ was published and max output is undisclosed.
- **Multimodal: 88/100.** Native audio *and* image input in one open-weights model (MMAU 77.0 %, Audio MC 54.9 %, CharXiv 81.3 % with Python) reaches the methodology's audio-in band; capped by text-only output and no video input or document-PDF claim.
- **Coding: 82/100.** SWE-bench Verified 80.2 % (82.2 % independent), LiveCodeBench 85.9 % and Terminal-Bench 64.7 % make it a top open-weights coder; capped by SWE-bench Pro 55.9 %, SciCode 48.7 % and AA Coding Index 53.0 % on the harder long-horizon sets.
- **Cost efficiency: 96/100.** $0.50/$1.20 with $0.10 cached input plus a $0 OpenRouter route, and 5.1 k output tokens/task on τ³ (the most efficient in the vendor's own comparison) — near the top of the scale; the free route's time-limited/monitoring caveats keep it off 100.
- **Overall Score: 84/100.** Mean of the five quality dimensions (72 + 84 + 92 + 88 + 82) / 5 = 83.6 → 84; Cost excluded per `RULES.md`. Best fit: cheap multimodal (audio+vision) agent/coder at 1M context where you can tolerate mid-tier tool persistence and a chatty knowledge base.

---

## Second-pass update — 2026-11-03 (UTC)

Staleness-triggered re-research (prior pass 2026-10-04); three independent sources consulted.

**Sources:** Pricing — https://thinkingmachines.ai/news/inkling-small/ (**"Inkling output pricing is $4.05 / 1M tokens and Inkling-Small output pricing"** [paired with the $1.20 figure] … **"free architecture as Inkling. Audio is represented as dMel"**) and https://www.developersdigest.tech/blog/inkling-small-open-weights-2026 (**"Tinker serverless pricing starts at $0.30 per million input tokens and $1.20 per million output, against Inkling's $1.00 / $4.05"**) — pass 1's aggregator quote ($0.50/$1.20) vs vendor list $0.30/$1.20, both recorded · free route — https://openrouter.ai/thinkingmachines/inkling-small:free (**"The free Inkling Small endpoint is only available for use with agentic harnesses. Do not upload any confidential information or personal data"** — still live, usage now narrowed) · index cascade — https://artificialanalysis.ai/articles/inkling-small-lands-within-a-point-of-inkling (launch: **"Inkling Small scores 40 … within a point of its flagship sibling … with less than a third of the parameters"**, 2026-07-30) and https://x.com/ArtificialAnlys/status/2082894822180819057 (**"Inkling Small averaged ~24K output tokens per … Index task"**) vs https://artificialanalysis.ai/models/inkling-small (current page: **"Inkling Small achieves a score of 13 on the Artificial Analysis Intelligence Index"**) vs pass 1's 25.7 on the tracked non-max v4.3.2 card — 40 (v4.1 launch scale) → 25.7 (v4.3.2) → **13** (v5.0 build, which per https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index **"incorporates 9 evaluations: AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0"**) — NOT averaged · family/lifecycle — https://thinkingmachines.ai/news/introducing-inkling/ (flagship positioning: **"Inkling is available for fine-tuning on Tinker today"**) and https://simonwillison.net/2026/Jul/16/inkling/ (**"intended as a strong base model for fine-tuning"**) — no Inkling-Small successor or retirement found as of 2026-11-03.

**What moved and how it was resolved:**

1. **AA Index cascade (40 → 25.7 → 13) is a scale rebuild, not a capability event.** v5.0 swaps in harder components (Terminal-Bench 4.0, FrontierCode 2.0, AA-Briefcase v1.1) and deflates everyone (same pattern as glm-5.3-flash's 57→42→28 and this batch's step-5-preview 43.7→29). No raw capability row moved, so no band moves: Reasoning 84 rests on GPQA 89.5/ARC-AGI-2 40.1/HLE profile; Tool 72 on MCP Atlas 79.6/TB 64.7; Coding 82 on SWE 80.2/82.2.
2. **Cost 96 holds, with a pricing-provenance note:** the vendor's own launch post + developersdigest confirm Tinker serverless **$0.30/$1.20** (cheaper input than pass 1's $0.50 aggregator quote); cached $0.10 and the $0 `:free` lane stand. Both readings logged, un-averaged — the band was already near the cheap anchor, so the difference is immaterial.
3. **`:free` route now carries an explicit scope restriction** ("only available for use with agentic harnesses" + no-confidential-data warning). Pass 1 already flagged time-limited/monitoring caveats; this sharpens them (self-host/fine-tune lanes unaffected — open weights + Tinker). Kept off 100 for the same reasons.
4. **No successor, no retirement:** nothing dated after 2026-10-04 changes Inkling-Small's status in the family (flagship Inkling remains the fine-tuning base; Small remains the efficient sibling).

**Scores changed by this pass:** none. Tool 72, Reasoning 84, Context 92, Multimodal 88, Coding 82 → mean 83.6 → **Overall 84 unchanged**; Cost 96 verified.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-04
- Method: fresh public internet research (Thinking Machines launch post and model card, Hugging Face, BenchLM, Artificial Analysis, Vals AI, OpenRouter/Together listings); scores are normalized 1–100 interpretations, not official vendor scores.
- Second-pass signature: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-11-03. Method: ≥3 independent sources (Thinking Machines launch posts, developersdigest pricing, OpenRouter free-route terms, AA article/post/current page); Index 40→25.7→13 v5.0 cascade logged un-averaged; vendor-vs-aggregator input-price readings both recorded; free-route scope restriction noted — **no dimension changed and Overall remains 84**. Prior pass retained verbatim per RULES.md.
- Future sources: add a new file next to this one, e.g. `Grok_4.6.md`, using the same headings.
