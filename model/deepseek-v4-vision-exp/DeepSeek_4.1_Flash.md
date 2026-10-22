# DeepSeek V4-Flash-Vision-Exp — findings by DeepSeek 4.1 Flash

- Source: DeepSeek / DeepSeek-V4-Flash-Vision-Exp (`deepseek-v4-flash-vision-exp`)
- Date: 2026-10-11 (UTC) — deep second pass (previous Signature 2026-10-01); re-verified 2026-10-18
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Deep second-pass re-verification — 2026-10-11** (≥3 independent sources).
> **Alias status reconfirmed:** DeepSeek's own docs state *"`deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` … are retired [and] route to V4.1-Flash"*; the current API model name is `deepseek-flash` (DeepSeek-V4.1-Flash). Newly confirmed vendor rows (HF card, 2026-08-21): **Terminal-Bench 2.1 83.9%**, NL2Repo 57.7, CyberGym 75.3, **DeepSWE 59.3**, **Toolathlon-Verified 75.9**, DSBench-Hard 63.6, AutomationBench 25.7; multimodal-agent rows ApexBench 36.5, Agents' Last Exam 27.3, Chartography 64.3, ZeroBench 35.0; independent **vLLM OCRBench 83.5%** (GB200). Context 1,048,576 (vLLM recipe), max output 384K (official pricing page); MIT open weights (HF repo), ≈305B (HF card) / 285B (vLLM).
> **Conflicts surfaced:** (1) **Context measurement** — the 1M window is *advertised, not measured*; the vLLM reference run used 32K. (2) **Parameters** — 305B (HF card) vs 285B/13B (vLLM) vs ~304.6B (4SAPI). (3) **Pricing** — official peak $0.30/$1.20 (off-peak $0.15/$0.60) vs $0.22/$0.66 (OpenCode/LLM-Stats) vs $0.44/$1.32 (DeepInfra). (4) **Open weights** — HF repo live (MIT) vs DataNorth "API-only, not released". (5) **Image-token cap** 384/image (release note) vs 1024/image (current Vision guide).
> **Adjusted dimension:** **Multimodal 85→70** — the checkpoint is **image-input only** (text+image → text), the methodology's `+image in = 60–70` band; the prior 85 implied a broader tier. As a retired alias now served by V4.1-Flash (scored 70), this is consistent. Overall 86 → **83**.
> Sources: https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp · https://api-docs.deepseek.com/news/news260821/ · https://api-docs.deepseek.com/news/news260910 · https://recipes.vllm.ai/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp

## Model card

- **Name:** DeepSeek V4-Flash-Vision-Exp (experimental multimodal checkpoint of the V4-Flash line, now a legacy alias)
- **Short description:** DeepSeek's experimental multimodal V4-Flash variant, released 2026-08-21 — image understanding bolted onto the 284B/13B-agentic V4-Flash text stack. On the 11 multimodal/agentic benchmarks DeepSeek disclosed at launch it beats Claude Opus 4.8 on three (ZeroBench 35.0 vs 34.0, Agents' Last Exam, Chartography) and trails on the rest (NL2Repo 57.7 vs 69.7).
- **Provider / access:** DeepSeek API — legacy id `deepseek-v4-flash-vision-exp` (retired/aliased 2026-09-10 to DeepSeek-V4.1-Flash at Flash prices). OpenRouter `deepseek/deepseek-v4-flash-vision-exp`; OpenCode `opencode-go/deepseek-v4-flash-vision-exp`.
- **Release / knowledge:** Released 2026-08-21; aliased 2026-09-10. Knowledge cutoff not disclosed.
- **IDs:** `deepseek-v4-flash-vision-exp` (legacy, routed); HF `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp` (MIT weights).
- **Context window:** 1,048,576 tokens (advertised); **max output 384,000** (official pricing page; LLM-Stats 393.2K). The vLLM reference run measured only 32K.
- **Modalities:** text and image in, text out; tool calls; thinking and non-thinking modes; JSON output.
- **Pricing (as of 2026-10-11):** billed at DeepSeek-Flash prices — peak **$0.30 / $1.20** in/out with $0.006 cache hit; off-peak **$0.15 / $0.60** with $0.003 cache hit.
- **Architecture:** 43-layer MoE built on V4-Flash-0731 (256 routed experts, 6 active/token), Compressed Sparse Attention; 32-layer ViT + aligner; FP4+FP8 mixed weights; 48 shards (~168 GB); MIT licence.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **83.9%** (vendor; Opus 4.8 85.0); NL2Repo 57.7 (Opus 69.7 — the largest gap); DSBench-Hard 63.6
- **Toolathlon-Verified 75.9%** (vendor); CyberGym 75.3; **DeepSWE 59.3**; AutomationBench 25.7
- Multimodal agent: ApexBench Pass@1 36.5 (Opus 39.4); Chartography 64.3; ZeroBench Pass@5 35.0; Agents' Last Exam 27.3
- **Independent:** vLLM OCRBench **83.5%** (835/1000, GB200); Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond / MMLU / MMLU-Pro **not published for this checkpoint** — the vendor states text reasoning "matches DeepSeek-V4-Flash" (base: GPQA 88.1%, MMLU-Pro 86.2%); HLE / CritPt / AA index: **no verified public score found**

Coding:

- DeepSWE 59.3 / NL2Repo 57.7 / TB 2.1 83.9 (agentic coding, above); SWE-bench Verified / HumanEval / LiveCodeBench: **no verified public score found** for this checkpoint

Long context:

- No long-context benchmark number; the 1M window is vendor-claimed and **the reference serving run used 32K**.

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 83.9% (within a point of Opus 4.8), Toolathlon-Verified 75.9% and ApexBench 36.5 support a high score; capped by the absence of any independent agentic number for the checkpoint itself.
- **Reasoning: 82/100.** The checkpoint inherits the V4-Flash text stack (GPQA 88.1%, MMLU-Pro 86.2%); no checkpoint-specific reasoning figure exists, and the Flash line trades knowledge depth for cost.
- **Context window: 95/100.** 1.05M tokens advertised with up to 384K output; held at 95 because the 1M window is documented but not measured (reference run 32K) and no recall-at-depth benchmark exists.
- **Multimodal: 70/100.** Native image input via base64/URL/Files-API with text output — the `+image in = 60–70` band; independent OCRBench 83.5% and small wins over Opus 4.8 on ZeroBench lift it to the band top. **Lowered from 85**, which had implied video/PDF capability the checkpoint does not have.
- **Coding: 82/100.** SWE-bench Verified 79.0% (base) / DeepSWE 59.3% are strong value; the NL2Repo 57.7 vs 69.7 gap shows agentic coding is not the strength.
- **Cost efficiency: 90/100.** Off-peak $0.15/$0.60 with a $0.003 cache hit is among the cheapest capable multimodal options; capped by peak-hour doubling and no free tier.
- **Overall Score: 83/100.** Mean of the five quality dims (88+82+95+70+82)/5 = 83.4 → 83. Best fit: cost-sensitive image+text agent workloads that accept an experimental, now-aliased checkpoint for near-flagship tool behaviour at a fraction of the price.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek-ai/deepseek-v4.1-flash)** — 2026-10-18
- Method: deep second-pass public internet research (DeepSeek API release notes + pricing/vision guides, Hugging Face card, vLLM recipe, DataNorth, LLM-Stats, OpenRouter). The alias/routing status and the vendor-only provenance were reconfirmed; the multimodal band correction and the advertised-vs-measured context caveat are surfaced. Scores are normalized 1–100 interpretations.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
