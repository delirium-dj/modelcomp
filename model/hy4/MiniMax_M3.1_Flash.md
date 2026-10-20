# Hy4 — findings by MiniMax M3.1 Flash

- Source: Tencent (Hy4 preview), `tencent/Hy4-preview`
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Hy4 (Hy4 preview)
- **Short description:** Tencent's August 2026 open-weight (Apache 2.0) frontier MoE — 770B total / 49B active with Gated DSA sparse attention and 1M context — the strongest Tencent open model yet (Terminal-Bench 2.1 85.4% vendor, GPQA-D 92.3%, MCP Atlas 83.7%) at roughly $0.75/$2.25 per 1M.
- **Provider / access:** Hugging Face `tencent/Hy4-preview` (BF16 + FP8), OpenRouter `tencent/hy4-preview`, Vercel, Novita, NanoGPT, Tencent TokenHub, OpenCode Go. **ID note:** the repo id `tencent/hy4` matches no registry — the real ids are `tencent/hy4-preview` (HF/OpenRouter) and `hy4-preview` (models.dev providers). **Not on OpenCode Zen.**
- **Release / knowledge:** **2026-08-27** (HF/GitHub created) vs **2026-08-28** (models.dev, BenchLM, OpenRouter) — conflict noted. Knowledge cutoff not published.
- **IDs:** `tencent/Hy4-preview` (HF), `tencent/hy4-preview` (OpenRouter), `hy4-preview` (models.dev: tencent-tokenhub, vercel, crossmodel, aihubmix, deepinfra, edenai, zenmux).
- **Context window:** **1,000,000** tokens with **64,000** max output (total 1,024,000 = 960K in + 64K out on some providers; 1,048,576 on others — conflict noted).
- **Modalities:** text in / text out only; reasoning with configurable effort; MTP speculative decoding (1 native MTP layer, 10B total / 0.7B active).
- **Pricing (as of 2026-10-20):** **$0.7506/M in, $2.2509/M out** (OpenRouter / NanoGPT / Kilo; cache $0.0378); $0.834/$2.501 (Vercel, TokenHub, Novita); $0.96/$2.88 (CrossModel). Tencent publishes no first-party hosted token rate — it is an open-weight, self-host model.
- **Architecture:** MoE, 770B total / 49B active (779,960,992,733 checkpoint tensors including MTP), 78 layers (1 dense + 77 MoE), 256 routed + 1 shared expert with top-8, hidden 6144, Gated DSA attention (64 heads, query compression 2048, KV compression 512, indexer top-k 2048), 4 residual streams, vocab 120,832.

### Raw benchmarks found

> Tencent publishes its tables as an **image appendix**; BenchLM extracts them with the image URL cited, and Vals AI provides the one independent agentic number.

Agent / tool use:

- Terminal-Bench 2.1: **85.4%** (Tencent image appendix) vs **55.1%** (Vals AI, independent, 2026-09-28) — a 30-point harness conflict, flagged
- MCP Atlas: **83.7%** · Toolathlon-Verified: **74.1%** · JobBench: **61.7%** · BankerToolBench: **78.6%** · WideResearch: **83.9%** · APEX-Agents: **37.1%** (Tencent)
- AutomationBench: **32.1%** · Agents' Last Exam: **22.8%** (Tencent) · CritPt: **16.9%** (Tencent) · Hermes Index: **26.1%** (Nous Research portal)

Reasoning / knowledge:

- GPQA Diamond: **92.3%** (Tencent) · HLE: **55.4%** with tools / **43.4%** without tools (Tencent) · CyberGym: **78.4%** (Tencent) · CWE-bench v1: **53.0%** · Hermes Bench: **58.6%**
- Tencent internal blind eval (163 internal experts, 203 engineering tasks): Hy4 preview **2.99** vs GLM 5.3 **2.92** and Kimi K3 **2.94**
- No Artificial Analysis row exists for Hy4 (absent from the AA catalogue), and no MMLU-Pro, AIME or FrontierMath figure was found

Coding:

- SWE-bench Pro: **65.7%** (Tencent) · DeepSWE: **64.3%** (Tencent) · SWE Multilingual: **82.9%** (Tencent) · ProgramBench: **17.5%** · sweMarathon: **31.9%** · PostTrain Bench: **35.6%** · NL2Repo: **58.9%**
- No SWE-bench Verified, LiveCodeBench, SciCode or DeepSWE-verified independent figure found

Long context:

- No MRCR / RULER measurement published for Hy4 despite the 1M window.

### Normalized scores (1–100)

- **Tool use: 76/100.** MCP Atlas 83.7%, Toolathlon-Verified 74.1%, BankerToolBench 78.6%, JobBench 61.7% and Terminal-Bench 2.1 85.4% (vendor) are frontier-tier agentic numbers; the 30-point gap to Vals AI's 55.1% Terminal-Bench run and AutomationBench 32.1% keep it out of the top band.
- **Reasoning: 82/100.** GPQA-D 92.3%, HLE 55.4% with tools, CyberGym 78.4% and WideResearch 83.9% are strong, capped by the absence of any independent measurement, any MMLU-Pro or AIME figure, and the Terminal-Bench conflict.
- **Context window: 88/100.** A 1,000,000-token window with 64,000 max output is the top tier, discounted because no MRCR/RULER retrieval test is published.
- **Multimodal: 15/100.** Text-in/text-out only — no vision or audio input in the published spec.
- **Coding: 78/100.** SWE-bench Pro 65.7%, DeepSWE 64.3%, SWE Multilingual 82.9% and Terminal-Bench 2.1 85.4% are high-end numbers, pulled down by ProgramBench 17.5% and sweMarathon 31.9%.
- **Cost efficiency: 88/100.** $0.75/M in and $2.25/M out for a 770B frontier-class open model is mid-market, and Apache 2.0 weights are free to self-host.
- **Overall Score: 68/100.** Mean of the five quality dims = (76 + 82 + 88 + 15 + 78) / 5 = 67.8 → **68**. Best fit: frontier open-weight agentic coding and security work — but every number here is vendor-published, so validate on your own harness before committing.

---

## Signature

- Provided by: **MiniMax M3.1 Flash (minimax/minimax-m3.1-flash)** — 2026-10-20
- Method: public internet research (Tencent Hy4 model card and GitHub repo, BenchLM, Vals AI, Nous Research Hermes portal, models.dev, OpenRouter API); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Hy4_GA.md`, using the same headings.
