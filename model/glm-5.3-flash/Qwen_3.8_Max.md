# GLM-5.3 Flash — findings by Qwen 3.8 Max

- Source: Z.ai / Zhipu AI (`glm-5.3-flash`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GLM-5.3 Flash
- **Short description:** Z.ai's (Zhipu's) open-weight budget model in the GLM-5 line and the **first natively multimodal** GLM-5 release (text/image/video/file input). A newly-trained 320B-total / 18B-active MoE with a hybrid linear+sparse attention design built for cheap 1M-token serving; Z.ai claims it approaches Claude Opus 4.8 on coding/agentic tasks at ~1/10 the price of GLM-5.3. It ran anonymously on public leaderboards under the codename **"Ox Alpha"** (becoming the most-used model on OpenRouter and OpenCode) before Z.ai revealed its identity.
- **Provider / access:** Z.ai / BigModel API (`glm-5.3-flash`), GLM Coding Plan (3x the usable quota of GLM-5.3); open weights on Hugging Face under **MIT** with day-one SGLang / vLLM / Transformers / KTransformers / TokenSpeed / Unsloth support.
- **Release / knowledge:** Released ~2026-08-26/27; knowledge cutoff not published.
- **IDs:** `zai/glm-5.3-flash` (a.k.a. the former anonymous "Ox Alpha" — tracked separately in this dataset as `ox_alpha`; treated here as its own entry).
- **Context window:** 1,000,000 tokens input; 128,000 tokens max output.
- **Modalities:** text + image + video + file in → text out; reasoning yes (thinking **always enabled** — disabled is unsupported; `reasoning_effort` low/high/max, default max); tool calls yes (function calling, streamed tool calls, structured output, context caching).
- **Pricing (as of 2026-10-21):** Budget Flash-tier — Z.ai positions it at ~1/10 the price of GLM-5.3, ~$0.25 per Artificial Analysis Intelligence Index task (cheapest in its cluster at launch); off-peak/weekend calls consume 50% of plan points. Exact per-token API rates not captured in accessible sources (recheck Z.ai/BigModel). MIT weights = free self-hosting.
- **Architecture:** MoE, 320B total / 18B active (down from GLM-4.5's 32B active, 92→45 layers); hybrid linear + sparse attention with IndexPool (compressed indexer cache) and Manifold-Constrained Hyper-Connections (mHC). Z.ai reports attention compute 3.01x lower and KV-cache 4.44x lower than GLM-5.3. Trained on a 30-trillion-token multimodal corpus.

### Raw benchmarks found

Agent / tool use (Z.ai-reported, `max` reasoning unless noted; vs GLM-5.2 / Claude Opus 4.8):

- Toolathlon Verified: **78.4** (GLM-5.2 59.9; **beats Opus 4.8's 76.2**)
- AutomationBench v1.0.6: **48.8** (GLM-5.2 26.2; **beats Opus 4.8's 41.0**, and above Claude Sonnet 5.5's 44.7)
- Agents' Last Exam: **26.3** (GLM-5.2 20.4; near Opus 4.8's 27.0)

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (rebased v4.3.2, Oct 2026): **41.81** at $0.25/task — mid-tier (below MiMo-V2.6-Pro 46.32, GPT-6.1 Sol 51.83, Claude Opus 5 50.78)
- Z.ai Code Bench v1.0 (internal): **29.0** at max effort (vs Z.ai's reported 29.5 for Opus 4.8)
- No GPQA Diamond / HLE / MMLU figures published in accessible sources (hard-reasoning ceiling not independently benchmarked)

Coding:

- Terminal-Bench 2.1: **84.3** (GLM-5.2 81.0; a hair below Opus 4.8's 85.0)
- DeepSWE v1.1: **63.4** (GLM-5.2 46.2; **beats Opus 4.8's 58.0**) — a +17.2 jump over its predecessor
- Visual-coding loop (native): understand screenshots/recordings → build frontend → run → inspect rendering → revise (frontend, games, 3D/Blender, computer use, document automation)

Multimodal:

- First natively multimodal GLM-5 (text/image/video/file); reads PDFs, slides, documents, spreadsheets and visually inspects generated deliverables; 30T-token multimodal training corpus
- No MMMU-Pro / OmniDocBench / CharXiv score published; a documented weakness on multilingual handwriting OCR (missed Urdu in a mixed-script note)

Long context:

- 1M-token window with 128K output, served cheaply via hybrid linear+sparse attention (KV-cache 4.44x lower than GLM-5.3); no MRCR / needle-in-a-haystack retrieval score published.

> Provenance: benchmark figures are **Z.ai vendor-reported** (official model documentation / technical blog / Hugging Face card, compiled by CodePick and MindStudio, verified 2026-08-27); the AA Intelligence Index (41.81) and $0.25/task are Artificial Analysis v4.3.2 (Oct 2026) via CodexSera. Z.ai's own methodology concedes harnesses differ and its internal Code Bench cannot be independently reproduced — treat vendor scores as an upper bound (the same over-claim pattern seen with Meta's Muse Spark). "Ox Alpha" identity confirmed by MindStudio/CodePick.

### Normalized scores (1–100)

- **Tool use: 88/100.** Vendor-reported Toolathlon 78.4 and AutomationBench 48.8 both beat Claude Opus 4.8 (76.2 / 41.0), with Agents' Last Exam 26.3 near parity and full function-calling/streamed-tool/structured-output support; capped below 90 because the numbers are Z.ai-run (not verified-leaderboard) and the mid-tier AA Index (41.81) tempers the "beats Opus" claims.
- **Reasoning: 80/100.** "Thinking always enabled" with a near-Opus Agents' Last Exam (26.3) and Code Bench (29.0); held back because the AA Intelligence Index is 41.81 (below MiMo-V2.6-Pro and well below the frontier) and no GPQA / HLE / MMLU ceiling is published.
- **Context window: 90/100.** A genuine 1M-token window with 128K output on an architecture purpose-built for cheap long-context (hybrid linear+sparse attention, 4.44x lower KV-cache); discounted only by the absence of a published retrieval (MRCR/needle) benchmark.
- **Multimodal: 85/100.** Broad native input (text/image/video/file — wider than GPT-5.6 Sol's text+image) with a practical visual-coding loop and document/spreadsheet reading; capped because no vision benchmark (MMMU-Pro/OmniDocBench) is published and multilingual handwriting OCR is a documented weak spot.
- **Coding: 87/100.** DeepSWE v1.1 63.4 beats Opus 4.8 (58.0) and Terminal-Bench 2.1 84.3 sits a hair below it (85.0), plus the native screenshot→render→revise loop is a real differentiator; capped because these are vendor-reported, not independently verified, and the composite index is mid-tier.
- **Cost efficiency: 93/100.** Exceptional — MIT open weights (free self-hosting), ~1/10 of GLM-5.3's price, $0.25/AA-task (cheapest in its cluster at launch) and 3x Coding-Plan quota; only MiMo-V2.6-Pro ($0.13/task at a higher 46.32 index) is a clearly better buy on the Oct-2026 board.
- **Overall Score: 86/100.** Mean of Tool 88 + Reasoning 80 + Context 90 + Multimodal 85 + Coding 87 = 86.0 → 86. Best fit: cost-sensitive, self-hostable, long-context and multimodal coding/agentic work — especially screenshot-driven frontend, document automation and high-volume agents where near-Opus capability at budget price (or free MIT weights) wins; the hardest verified coding and pure reasoning still favor the frontier, and its vendor-reported margins should be re-tested on your own harness.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-21
- Method: public internet research (Z.ai's vendor-reported benchmark table via CodePick and MindStudio guides; architecture/HF card; Artificial Analysis Intelligence Index v4.3.2 and cost-per-task via CodexSera; "Ox Alpha" codename identity confirmed across sources); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
