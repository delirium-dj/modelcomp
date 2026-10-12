# GPT-5.4 Nano — findings by Claude Opus 5

- Source: OpenAI (`gpt-5.4-nano`, benchmarked snapshot `gpt-5.4-nano-2026-03-17`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano (OpenAI styles it "GPT‑5.4 nano")
- **Short description:** "The smallest, cheapest version of GPT-5.4 for tasks where speed and cost matter most", recommended by OpenAI "for classification, data extraction, ranking, and coding subagents that handle simpler supporting tasks" ([OpenAI, 2026-03-17](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)). Distinct SKU; `gpt-5.4`, `gpt-5.4-pro` and `gpt-5.4-mini` have their own folders, as does the earlier `gpt-5-nano`.
- **Provider / access:** **OpenAI API only** — OpenAI states plainly "GPT‑5.4 nano is only available in the API", with no Codex or ChatGPT surface. Also **OpenCode Zen** as `gpt-5.4-nano` on `https://opencode.ai/zen/v1/responses` ([Zen docs](https://opencode.ai/docs/zen/)). Responses API style.
- **Release / knowledge:** Released **2026-03-17** alongside GPT-5.4 mini; benchmarked snapshot `gpt-5.4-nano-2026-03-17`. Knowledge cutoff: no verified public date found.
- **IDs:** `gpt-5.4-nano` (OpenAI), `opencode/gpt-5.4-nano` (Zen). **No free tier** on any route — and unlike mini, no free ChatGPT path either, since it is API-only.
- **Context window:** **400,000 tokens** ([BenchLM](https://benchlm.ai/models/gpt-5-4-nano)). Max output: no verified public figure found. See the long-context section — the advertised window and the measured one diverge badly.
- **Modalities:** **Text + image in → text out.** No audio, no video, no generated media. Reasoning: yes, with `reasoning_effort` sweepable to **xhigh** (all OpenAI figures below are at xhigh). Tool calls: yes — the GPT-5.4 family API surface includes tool use, function calling, web search, file search, computer use and skills.
- **Pricing (as of 2026-10-08):** **$0.20 / MTok input, $1.25 / MTok output** (OpenAI); Zen adds **$0.02 / MTok cached input**.
- **Architecture:** Proprietary, closed weights. Parameter count and distillation method undisclosed; positioned as the smallest tier of the GPT-5.4 family.

### Raw benchmarks found

> Strong evidence base — **37 of 625 benchmarks** — with OpenAI's four-model comparison table (GPT-5.4 / mini / nano / GPT-5 mini, all at xhigh) plus independent Vals AI and Artificial Analysis runs on the same snapshot. Vendor and independent figures agree closely on GPQA (82.8 / 81.7 / 77.5) and HLE (24.3 vendor no-tools vs 28.3 AA).

Agent / tool use:

- **τ²-bench (telecom): 92.5%** (OpenAI; GPT-5.4 98.9%, mini 93.4%, GPT-5 mini 74.1%) — near-saturated, and only 0.9 points behind mini
- **MCP Atlas: 56.1%** (OpenAI; mini 57.7%, GPT-5.4 67.2%) — essentially level with mini
- Terminal-Bench 2.0: **46.3%** (OpenAI); independently **Terminal-Bench 2.1: 41.6%** ([Vals AI](https://www.vals.ai/models/openai_gpt-5.4-nano-2026-03-17))
- **OSWorld-Verified: 39.0%** (OpenAI) — against mini's 72.1%, i.e. computer use is where nano falls off a cliff relative to mini
- Toolathlon: **35.5%** (OpenAI; mini 42.9%)
- GDPval-AA: **1035 Elo** / **22.5%** normalized; APEX-Agents-AA: **24.9%**; AA Agentic Index: **17.7%** ([Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-4-nano))

Reasoning / knowledge:

- **GPQA Diamond: 82.8%** (OpenAI) / **81.7%** (Artificial Analysis) / **77.5%** (Vals AI) — three harnesses within 5.3 points
- **HLE: 24.3% without tools, 37.7% with tools** (OpenAI); independently **AA-HLE 28.3%**
- MMLU-Pro: **77.2%** (Vals AI); **AA-IFBench: 75.9%**; **AA-LCR: 76.7%** (Artificial Analysis)
- ARC-AGI-1: **51.50%**; **ARC-AGI-2: 5.7%** ([ARC Prize](https://arcprize.org/leaderboard))
- CritPt: **9.3%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **20.7**; BenchLM overall **47.44/100, rank #109 of 889**
- AA-Omniscience: Index **−29.5**, Accuracy **25.7%**, **Hallucination Rate 74.2%**
- FrontierMath v2: Tiers 1–3 **25.86%**, Tier 4 **6.25%** ([Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard))

Coding:

- **SWE-Bench Pro (Public): 52.4%** (OpenAI; GPT-5.4 57.7%, mini 54.4%, GPT-5 mini 45.7%) — remarkably, **within 5.3 points of the full-size model**
- **SWE-bench Verified: 69.8%** ([Vals AI](https://www.vals.ai/models/openai_gpt-5.4-nano-2026-03-17)) — only 3.2 points behind mini's 73.0%
- **LiveCodeBench: 84.0%** (Vals AI) — notably **above mini's 81.5%**
- Terminal-Bench 2.0: **46.3%** (counted once for agentic and once here)
- AA Coding Index: **56.1%**; AA-SciCode: **47.2%** (Artificial Analysis)
- Vibe Code Bench: **26.10%** ([Vals AI](https://www.vals.ai/benchmarks/vibe-code)) — low, but functional rather than the near-zero collapse other families post on this harness

Multimodal:

- **MMMU-Pro: 66.1%**, **MMMU-Pro with Python: 69.5%** (OpenAI; mini 76.6% / 78.0%); independently **AA-MMMU-Pro 65.4%**
- **OmniDocBench 1.5, no tools, overall edit distance (lower is better): 0.2419** (OpenAI; mini 0.1263, GPT-5.4 0.109) — run at `reasoning_effort: none`, and roughly twice mini's error rate
- No video, audio, MathVision or CharXiv number found

Long context:

- **OpenAI MRCR v2, 8-needle, 64K–128K: 44.2%**; **128K–256K: 33.1%** (OpenAI; GPT-5.4 86.0% / 79.3%)
- **Graphwalks BFS, 0K–128K: 73.4%**; **Graphwalks parents, 0–128K: 50.8%** (OpenAI; GPT-5.4 93.1% / 89.8%)
- AA-LCR: **76.7%**
- As with mini, OpenAI's disclosure here is self-damaging and deserves credit for honesty: **a 400K-window model retrieving 44.2% of 8 needles at 64–128K and 33.1% at 128–256K.**

### Normalized scores (1–100)

- **Tool use: 68/100.** Structured tool calling is excellent for the tier — **τ²-bench 92.5%** is within a point of mini and near-saturated, and **MCP Atlas 56.1% actually matches mini** — which makes nano unusually capable at schema-bound function calling for its price. The cap is computer use and open-ended agency: **OSWorld-Verified 39.0% against mini's 72.1%** is a 33-point collapse, Toolathlon 35.5%, Terminal-Bench 2.1 41.6% independently, and an AA Agentic Index of 17.7%.
- **Reasoning: 70/100.** Strong and well-corroborated across three harnesses: **GPQA Diamond 82.8 / 81.7 / 77.5**, with **AA-IFBench 75.9%** and **AA-LCR 76.7%** both excellent for the smallest tier of the family. Capped by **ARC-AGI-2 at 5.7%**, CritPt 9.3%, FrontierMath Tier 4 6.25%, HLE 24.3% without tools, an AA Intelligence Index of 20.7, and a **74.2% hallucination rate** against 25.7% accuracy.
- **Context window: 66/100.** The advertised **400K** would earn high-70s on size alone; OpenAI's own retrieval data does not support it. **44.2% MRCR at 64–128K falling to 33.1% at 128–256K** means two-thirds of an 8-needle task is lost before the window is even two-thirds used. Graphwalks BFS 73.4% and AA-LCR 76.7% confirm the first ~128K is genuinely usable, which is what this score reflects.
- **Multimodal: 66/100.** Text and images in, text out. Respectable for the tier — MMMU-Pro 66.1% (65.4% independently), 69.5% with Python — and **OmniDocBench 0.2419 at zero reasoning effort** is usable document OCR at minimum cost. Capped by every figure trailing mini by ~10 points (MMMU-Pro 66.1 vs 76.6; OmniDocBench 0.2419 vs 0.1263), by text-only output, and by no audio, video or chart measurement.
- **Coding: 70/100.** The standout surprise: **SWE-Bench Pro 52.4% is within 5.3 points of full GPT-5.4**, SWE-bench Verified 69.8% is only 3.2 behind mini, and **LiveCodeBench 84.0% actually beats mini's 81.5%** — for a model at a quarter of mini's input price. Capped by Terminal-Bench 2.0 at 46.3%, AA-SciCode 47.2%, Vibe Code Bench 26.10%, and the absence of any FrontierCode result.
- **Cost efficiency: 90/100.** **$0.20 in / $1.25 out per MTok with $0.02 cached input**, for a model posting GPQA 81.7%, SWE-bench Verified 69.8% and LiveCodeBench 84.0%, is outstanding value — roughly a quarter of GPT-5.4 mini's input price for a BenchLM score of 47.44 against mini's 53.87, and it *beats* mini on LiveCodeBench outright. Docked because it is **API-only** (no free ChatGPT route, unlike mini), has no free tier at all, bills output at 6.25× input on a model whose reasoning effort sweeps to xhigh, and the 400K window you are paying for is only reliable across the first ~128K.
- **Overall Score: 68/100.** Mean of the five non-cost dims (68 + 70 + 66 + 66 + 70) / 5 = 68.0. Best fit: exactly OpenAI's recommendation, plus one upgrade — classification, extraction, ranking and **coding subagents**, where its near-mini SWE-bench and above-mini LiveCodeBench performance at a quarter the price make it the better economic choice for bulk code work under ~128K tokens. Do not give it computer-use tasks (OSWorld 39.0%), abstract reasoning (ARC-AGI-2 5.7%), or unverified factual output (74.2% hallucination rate).

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — OpenAI's "Introducing GPT-5.4 mini and nano" launch post (release date, API-only availability, $0.20/$1.25 pricing, the recommended use cases, and the full four-model xhigh benchmark table across coding, tool-calling, intelligence, multimodal and long context including the MRCR v2 and Graphwalks figures and the `reasoning_effort: none` caveat on OmniDocBench), the OpenCode Zen docs (ID, endpoint, cached-input rate), BenchLM's aggregated page (37 of 625 benchmarks, 400K context, and the intra-family score comparison), and the underlying Vals AI, Artificial Analysis, ARC Prize and Epoch AI leaderboards. Where three harnesses measured GPQA Diamond (82.8 / 81.7 / 77.5) the spread is reported rather than averaged; OpenAI's self-published long-context degradation is weighted as the decisive evidence for the context score. Intra-family comparisons to GPT-5.4, GPT-5.4 mini and GPT-5 mini are drawn from OpenAI's single published table and from BenchLM aggregate scores, used only for scale and the cost argument — **no data was imported from `gpt-5.4`, `gpt-5.4-mini`, `gpt-5.4-pro` or `gpt-5-nano`**, each of which has its own folder. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
