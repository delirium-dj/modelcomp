# GPT-5.4 Nano — findings by Claude Opus 5

- Source: OpenAI (`gpt-5.4-nano`, benchmarked snapshot `gpt-5.4-nano-2026-03-17`)
- Date: 2026-10-08 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.4 Nano (OpenAI styles it "GPT‑5.4 nano")
- **Short description:** "The smallest, cheapest version of GPT-5.4 for tasks where speed and cost matter most", which OpenAI recommends "for classification, data extraction, ranking, and **coding subagents that handle simpler supporting tasks**" ([OpenAI, 2026-03-17](https://openai.com/index/introducing-gpt-5-4-mini-and-nano/)). Distinct model; `gpt-5.4`, `gpt-5.4-pro` and `gpt-5.4-mini` are separate SKUs with their own folders, and `gpt-5-nano` is the previous generation.
- **Provider / access:** **OpenAI API only** — OpenAI states plainly that "GPT‑5.4 nano is only available in the API", with no Codex or ChatGPT surface. Also **OpenCode Zen** as `gpt-5.4-nano` on `https://opencode.ai/zen/v1/responses` ([Zen docs](https://opencode.ai/docs/zen/)).
- **Release / knowledge:** Released **2026-03-17**, alongside GPT-5.4 mini. Benchmarked snapshot `gpt-5.4-nano-2026-03-17`. Knowledge cutoff: no verified public date found.
- **IDs:** `gpt-5.4-nano` (OpenAI API), `opencode/gpt-5.4-nano` (Zen). **No free tier** — and unlike GPT-5.4 mini, no free ChatGPT route either, since this model is API-only.
- **Context window:** **400,000 tokens** ([BenchLM](https://benchlm.ai/models/gpt-5-4-nano)). Max output: no verified public figure found. See the long-context section — the advertised window and the measured one diverge sharply.
- **Modalities:** **Text + image in → text out.** No audio, no video, no generated media. Reasoning: yes, with `reasoning_effort` sweepable to **xhigh** (all OpenAI figures below are xhigh). Tool calls: yes.
- **Pricing (as of 2026-10-08):** **$0.20 / MTok input, $1.25 / MTok output** (OpenAI); **$0.02 / MTok cached input** (Zen).
- **Architecture:** Proprietary, closed weights. Parameter count, distillation method and activation scheme undisclosed.

### Raw benchmarks found

> Strong evidence base — **37 of 625 benchmarks** — and OpenAI's four-model launch table is corroborated closely by independent harnesses where they overlap (GPQA Diamond 82.8% vendor vs 81.7% Artificial Analysis; MMMU-Pro 66.1% vs 65.4%). OpenAI also published a full long-context section, which is what drives the context score down.

Agent / tool use:

- **τ²-bench (telecom): 92.5%** (OpenAI; GPT-5.4 98.9%, GPT-5 mini 74.1%) — near-saturated
- **MCP Atlas: 56.1%** (OpenAI; GPT-5.4 67.2%)
- Terminal-Bench 2.0: **46.3%** (OpenAI); independently **Terminal-Bench 2.1: 41.6%** ([Vals AI](https://www.vals.ai/models/openai_gpt-5.4-nano-2026-03-17))
- **OSWorld-Verified: 39.0%** (OpenAI) — notably *below* GPT-5 mini's 42.0%, the one row where the older mini wins
- Toolathlon: **35.5%** (OpenAI)
- APEX-Agents-AA: **24.9%**; GDPval-AA: **1035 Elo** / **22.5%** normalized; AA Agentic Index: **17.7%** ([Artificial Analysis](https://artificialanalysis.ai/models/gpt-5-4-nano))

Reasoning / knowledge:

- **GPQA Diamond: 82.8%** (OpenAI); independently **81.7%** (Artificial Analysis) and **77.5%** (Vals AI) — three harnesses within 5.3 points
- **HLE: 24.3% without tools, 37.7% with tools** (OpenAI); independently **AA-HLE 28.3%**
- MMLU-Pro: **77.2%** (Vals AI)
- **AA-IFBench: 75.9%**; **AA-LCR: 76.7%** (Artificial Analysis) — both strong for the tier
- ARC-AGI-1: **51.50%**; ARC-AGI-2: **5.7%** ([ARC Prize leaderboard](https://arcprize.org/leaderboard))
- CritPt: **9.3%**; Artificial Analysis Intelligence Index: **20.7** (Artificial Analysis)
- FrontierMath v2: Tiers 1–3 **25.86%**, Tier 4 **6.25%** ([Epoch AI](https://epoch.ai/benchmarks/frontiermath-tier-4-v2?view=graph&tab=leaderboard))
- AA-Omniscience: Index **−29.5**, Accuracy **25.7%**, **Hallucination Rate 74.2%**
- BenchLM overall: **47.44/100, rank #109 of 889**

Coding:

- **LiveCodeBench: 84.0%** ([Vals AI](https://www.vals.ai/models/openai_gpt-5.4-nano-2026-03-17)) — and notably **higher than GPT-5.4 mini's 81.5%** on the same harness
- **SWE-bench Verified: 69.8%** (Vals AI) — within 3.2 points of the mini tier
- **SWE-Bench Pro (Public): 52.4%** (OpenAI; GPT-5.4 57.7%, GPT-5.4 mini 54.4%, GPT-5 mini 45.7%)
- Terminal-Bench 2.0: **46.3%** (OpenAI; counted once for agentic and once here)
- AA-SciCode: **47.2%**; AA Coding Index: **56.1%** (Artificial Analysis)
- Vibe Code Bench: **26.10%** ([Vals AI](https://www.vals.ai/benchmarks/vibe-code))

Multimodal:

- **MMMU-Pro: 66.1%**, **MMMU-Pro with Python: 69.5%** (OpenAI); independently **AA-MMMU-Pro 65.4%** — a 0.7-point match
- **OmniDocBench 1.5, no tools, overall edit distance (lower is better): 0.2419** (OpenAI, run at `reasoning_effort: none`) — nearly **double** GPT-5.4 mini's 0.1263, i.e. materially worse document OCR

Long context — OpenAI's own figures, and they are unflattering:

- **OpenAI MRCR v2, 8-needle, 64K–128K: 44.2%** (GPT-5.4 86.0%, GPT-5.4 mini 47.7%)
- **OpenAI MRCR v2, 8-needle, 128K–256K: 33.1%** (GPT-5.4 79.3%)
- **Graphwalks BFS, 0K–128K: 73.4%** (GPT-5.4 93.1%)
- **Graphwalks parents, 0–128K: 50.8%** (GPT-5.4 89.8%, GPT-5.4 mini 71.5%) — a 21-point drop from the mini tier
- AA-LCR: **76.7%** (Artificial Analysis)

### Normalized scores (1–100)

- **Tool use: 66/100.** **τ²-bench 92.5%** is near-saturated and MCP Atlas 56.1% is respectable for the smallest tier in the family. Capped by a consistently mid-to-low agentic tail: Terminal-Bench 41.6% independently, **OSWorld-Verified 39.0% — actually below the previous generation's GPT-5 mini at 42.0%**, Toolathlon 35.5%, and an AA Agentic Index of 17.7%.
- **Reasoning: 70/100.** Genuinely strong for a nano tier and well corroborated: **GPQA Diamond at 82.8 / 81.7 / 77.5 across three harnesses**, MMLU-Pro 77.2%, and **AA-IFBench 75.9%** plus **AA-LCR 76.7%** that both exceed many far larger models here. Capped by ARC-AGI-2 at 5.7%, CritPt 9.3%, FrontierMath Tier 4 6.25%, an AA Intelligence Index of 20.7, and a **74.2% hallucination rate** against 25.7% accuracy.
- **Context window: 66/100.** Scored down from the 400K headline by OpenAI's own published measurements, which is the honest reading: **8-needle MRCR retrieval of 44.2% at 64–128K falling to 33.1% at 128–256K**, and Graphwalks-parents at 50.8% even within the first 128K — 21 points below the mini tier. The first ~128K is usable (Graphwalks BFS 73.4%, AA-LCR 76.7%); beyond that the window is nominal.
- **Multimodal: 66/100.** Text and images in, text only out. Vision is solid and independently confirmed — **MMMU-Pro 66.1% vendor / 65.4% independent**, rising to 69.5% with Python tool use. Capped by no audio or video, and specifically by **OmniDocBench 1.5 at 0.2419** — roughly twice the error of GPT-5.4 mini, so document OCR is where the size reduction visibly costs you.
- **Coding: 70/100.** Remarkably good for the cheapest tier in the family, and the standout is counter-intuitive: **LiveCodeBench 84.0% actually beats GPT-5.4 mini's 81.5%** on the same independent harness, with **SWE-bench Verified 69.8%** only 3.2 points behind mini and SWE-Bench Pro 52.4% within 2 points. Capped by Terminal-Bench 2.0 at 46.3%, AA-SciCode 47.2%, and Vibe Code Bench 26.10%.
- **Cost efficiency: 90/100.** **$0.20 in / $1.25 out per MTok, with $0.02 cached input**, for a model posting SWE-bench Verified 69.8%, LiveCodeBench 84.0% and GPQA Diamond 81.7% is exceptional — roughly a quarter of GPT-5.4 mini's rate for 90–103% of its coding performance. For high-volume subagent fan-out this is one of the best value propositions in the dataset. Docked because it is **API-only with no free route whatsoever** (mini at least reaches ChatGPT Free users), and because the 400K window you are nominally paying for is only reliable across its first third.
- **Overall Score: 67.6/100.** Mean of the five non-cost dims (66 + 70 + 66 + 66 + 70) / 5 = 67.6. Best fit: exactly OpenAI's recommendation — **classification, extraction, ranking, and high-volume coding subagents** — plus, on the evidence, competitive-programming-style code generation where it matches or beats the tier above it at a quarter of the price. Keep prompts under ~128K (OpenAI's own MRCR data is unambiguous), prefer the mini tier for document OCR (0.1263 vs 0.2419), do not put it in charge of computer-use loops (OSWorld 39.0%), and verify its factual claims (74.2% hallucination rate).

---

## Signature

- Provided by: **Claude Opus 5 (anthropic/claude-opus-5)** — 2026-10-08
- Method: fresh public internet research only — OpenAI's "Introducing GPT-5.4 mini and nano" launch post (release date, API-only availability, $0.20/$1.25 pricing, the recommended use cases, and the full four-model benchmark table across coding, tool-calling, intelligence, multimodal and long context — including the τ²-bench, MCP Atlas, Toolathlon, OSWorld-Verified, SWE-Bench Pro, Terminal-Bench 2.0, GPQA, HLE, MMMU-Pro, OmniDocBench, MRCR v2 and Graphwalks figures with their explicit `reasoning_effort` caveats), the OpenCode Zen docs (ID, endpoint, cached-input rate), BenchLM's aggregated page, and the underlying Vals AI, Artificial Analysis, ARC Prize and Epoch AI leaderboards. Where three harnesses measured GPQA Diamond (82.8 / 81.7 / 77.5) or two agreed closely on MMMU-Pro (66.1 / 65.4) that convergence is reported; OpenAI's self-published long-context degradation is weighted as the decisive evidence for the context score. Intra-family comparisons against GPT-5.4, GPT-5.4 mini and GPT-5 mini come from the single OpenAI table and from Vals AI figures gathered independently in this same research pass; **no data was imported from the `gpt-5.4`, `gpt-5.4-pro`, `gpt-5.4-mini` or `gpt-5-nano` folders**. No peer `model/` findings files were read. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
