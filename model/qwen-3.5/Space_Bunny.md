# Qwen 3.5 — findings by Space Bunny

- Source: Alibaba / Qwen (`qwen/qwen3.5-397b-a17b`; open weights on Hugging Face under Apache 2.0)
- Date: 2026-10-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Slug mapping note (read first).** The folder slug `qwen-3.5` has **no exact single-model
> ID**: OpenCode Zen's catalog entry is `qwen3.5-plus` (already covered by the sibling
> `qwen-3.5-plus/` folder), and the family also ships `qwen3.5-9b`, `qwen3.5-35b-a3b`,
> `qwen3.5-27b`, `qwen3.5-122b-a10b` and `qwen3.5-flash`. This report therefore documents the
> **family flagship, Qwen3.5 397B-A17B** — the model the bare "Qwen 3.5" name denotes in
> every vendor announcement and the only variant with a full independent benchmark suite.
> All numbers below belong to that model only; no sibling's figures are transferred to it.

## Model card

- **Name:** Qwen 3.5 (flagship: **Qwen3.5 397B-A17B**)
- **Short description:** Alibaba's February 2026 flagship open-weight multimodal MoE — a native vision-language model pairing a linear-attention hybrid backbone with a sparse mixture-of-experts design, aimed squarely at agentic work: code generation, tool use, image/video understanding and GUI interaction. Apache 2.0 weights at 397B total / 17B active make it self-hostable, and it is notably fast for its size (82.8 tok/s measured) and concise (95M output tokens on the AA Index run, well under the 140M class median). Distinct tiers inside the family are covered by their own folders.
- **Provider / access:** Open weights on Hugging Face (Apache 2.0); Alibaba's DashScope API; OpenRouter as `qwen/qwen3.5-397b-a17b` (Chat Completions, OpenAI-compatible); additionally DeepInfra, Venice AI and DigitalOcean.
- **Release / knowledge:** **2026-02-16** (OpenRouter listing date; Artificial Analysis records "Released February 2026"). Knowledge cutoff not published.
- **IDs:** `qwen/qwen3.5-397b-a17b` (OpenRouter), `Qwen/Qwen3.5-397B-A17B` (DeepInfra), `qwen3-5-397b-a17b` (Venice AI). No Zen Free ID — cost is scored on verified paid pricing.
- **Context window:** **262,144 tokens** (Artificial Analysis "262k"; OpenRouter 262,144) with **235,929 max output**.
- **Modalities:** text, **image** and **video** in; text out; **reasoning supported** (thinking variant, plus a non-reasoning variant); tool calling supported; reasoning and non-reasoning variants are separately benchmarked below.
- **Pricing (as of 2026-10-03):** **$0.60 in / $3.60 out per 1M** on Alibaba's own API (Artificial Analysis); OpenRouter routes it at **$0.39 / $2.34** per 1M after provider competition. DeepInfra lists $0.55/$3.50. Paid only.
- **Architecture:** Open-weight sparse MoE, **397B total / 17B active** parameters per token, Apache 2.0. Hybrid architecture combining a linear-attention mechanism with sparse MoE for inference efficiency.

### Raw benchmarks found

> The full Artificial Analysis suite is published per variant. Both columns are given; the
> **Reasoning** variant is used for the normalized scores.

Agent / tool use:

- τ²-Bench Telecom (tool use): **95.6%** (Reasoning) / **83.9%** (Non-reasoning)
- Terminal-Bench Hard: **40.9%** (Reasoning) / **35.6%** (Non-reasoning)
- Artificial Analysis Agentic Index: **8.3** (Reasoning)
- GDPval-AA: **14.0%** (Reasoning)
- Claw-Eval / Toolathon / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **18.4** (Reasoning), ranked **#60 / 118** among open-weight reasoning models of comparable size — *below* the class median of 19 (Artificial Analysis)
- GPQA Diamond: **89.3%** (Reasoning) / **86.1%** (Non-reasoning)
- HLE: **29.0%** (Reasoning) / **19.8%** (Non-reasoning)
- AA-LCR (long-context reasoning): **77.3%** (Reasoning) / **64.3%** (Non-reasoning)
- CritPt: **1.7%** (Reasoning) / **0.9%** (Non-reasoning) — near-floor on both
- AA-Omniscience Accuracy: **30.8%** (Reasoning) / **24.5%** (Non-reasoning)
- AA-Omniscience Non-Hallucination Rate: **11.1%** (Reasoning) / **17.3%** (Non-reasoning) — very low on both
- IFBench (instruction following): **78.8%** (Reasoning) / **51.6%** (Non-reasoning)

Coding:

- Artificial Analysis Coding Index: **48.2** (Reasoning)
- SciCode: **44.8%** (Reasoning)
- SWE-bench Verified / SWE-Pro / LiveCodeBench / Vibe Code Bench / DeepSWE: no verified public score found

Long context:

- AA-LCR **77.3%** (Reasoning) at the model's 262K window; no MRCR / RULER / GraphWalks figure at full window published.

Throughput / efficiency (measured):

- **82.8 output tokens/s**, ranked **#27 / 118** in its class (Artificial Analysis)
- Verbosity: **95M** output tokens on the Intelligence Index run vs a 140M class median (Artificial Analysis) — #12 / 118 for conciseness
- End-to-end response time slightly above the 2.22s class median; TTFT not separately published

Visual / arena (Design Arena Elo, Qwen3.5 397B A17B):

- 3D **1176** (#55) · Code Categories **1186** (#58) · Data Visualization **1184** (#60) · Game Dev **1153** (#67) · SVG **1139** (#49) · UI Component **1170** (#68) · Website **1197** (#59)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` (v4). Overall = half-up
> mean of the five quality dims; Cost efficiency is scored but never counted.
>
> Scores describe the **397B-A17B Reasoning variant**, the flagship this folder documents.

- **Tool use: 72/100.** Two independent tool-facing numbers land in the methodology's mid band: **τ²-Bench Telecom 95.6%** and **Terminal-Bench Hard 40.9%**, with an AA Agentic Index of 8.3. That combination — excellent on the tool-call conversation benchmark, mid-range on long-horizon terminal work — is the signature of a capable tool user that is not yet an agentic powerhouse. Held below the 90–100 frontier band (TB2.1 ~88%+, Tau3 ~50%+): Terminal-Bench Hard at 40.9% is well short, GDPval-AA is only 14.0%, and Claw-Eval/Toolathon/MCP-Atlas are absent.
- **Reasoning: 63/100.** **GPQA Diamond 89.3%** sits just under the methodology's 90% frontier marker, and **HLE 29.0%** plus **AA-LCR 77.3%** are solid mid-to-upper-mid readings — comfortably inside the 55–65 mid band on the strength of GPQA and LCR, but three drags keep it out of the 90–100 band: **CritPt 1.7%** is effectively at floor, the AA Intelligence Index of **18.4** is *below* its own class median of 19, and **Omniscience Non-Hallucination 11.1%** is the worst honesty signal in this dataset — the model confidently asserts on questions it does not know.
- **Context window: 80/100.** Verified **262,144** total maps to the 200K–500K = 65–84 band with 200K = 70 as the anchor; the 262K figure and a large **235,929 max output** justify the upper half, and AA-LCR **77.3%** at that window is real measured evidence rather than a capacity claim. Not higher: 262K is below the 500K–1M tier that Qwen's own Plus/Max siblings reach, and no MRCR/RULER/GraphWalks figure exists at full window.
- **Multimodal: 85/100.** **Video and image input** with text-only output places this in the 75–90 band at the top of it — OpenRouter, Artificial Analysis and LLM Directory all agree on `text,image,video->text`. Not 90+: output is text-only, there is no audio path, and the Design Arena Elo cluster (1,139–1,197) reads as solid-but-unexceptional visual output quality rather than best-in-class.
- **Coding: 62/100.** AA **Coding Index 48.2** and **SciCode 44.8%** sit in the methodology's mid range (SciCode <40% would cap lower; 44.8% clears it, frontier is 55%+). Capped there by the absence of SWE-bench, LiveCodeBench and DeepSWE figures entirely — a 397B flagship with no public repo-level repair score is a real evidence gap, and the weak **Omniscience** profile suggests generated code should be reviewed rather than merged unreviewed.
- **Cost efficiency: 88/100.** **$0.60 in / $3.60 out per 1M** on Alibaba's own API lands almost exactly on the methodology's **~$1.25/$4.25 ≈ 88** anchor, and OpenRouter routes it cheaper at $0.39/$2.34. Self-hostable Apache 2.0 weights at 17B active genuinely justify a near-top-tier cost score. Not higher because this is a real paid rate card with a large output price, and the 11.1% non-hallucination rate means retries are a genuine cost multiplier here.
- **Overall Score: 72.4/100.** Mean of (72 + 63 + 80 + 85 + 62) / 5 = 72.4. Best fit as a self-hostable, Apache-2.0 multimodal workhorse for teams that need video/image understanding plus solid tool use and instruction following at open-weight licensing — a strong default for private multimodal agent pipelines. Its two real weaknesses are the low overall Intelligence Index relative to its size class and its hallucination profile, so it should not be trusted for unsupervised knowledge work without grounding.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-03
- Method: public internet research (Artificial Analysis model page for the Intelligence Index, speed, verbosity, pricing, parameter counts and licence; OpenRouter's model page and API for the per-variant benchmark summary table, context window, max output, release date and routed pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8.md`, using the same headings.