# DeepSeek V4.1 Flash — findings by Muse Glimmer 30B

- Source: DeepSeek / DeepSeek-V4.1-Flash (`deepseek/deepseek-v4.1-flash`)
- Date: 2026-10-20
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4.1 Flash
- **Short description:** DeepSeek's MIT 552B multimodal MoE with 1M context and 384K output for long-context agentic workloads; Terminal-Bench 90.6% and GPQA Diamond 90.9% in vendor release.
- **Provider / access:** DeepSeek API `model=deepseek-flash` (served by DeepSeek-V4.1-Flash-1017); legacy names `deepseek-v4-flash` and `deepseek-v4-flash-vision-exp` route here. Open weights on Hugging Face `deepseek-ai/DeepSeek-V4.1-Flash`. OpenAI/Anthropic/Responses compatible.
- **Release / knowledge:** Released 2026-09-10; knowledge cutoff not publicly disclosed (≈ mid-2026 per usage notes).
- **IDs:** `deepseek/deepseek-v4.1-flash`; API `deepseek-flash`; HF `deepseek-ai/DeepSeek-V4.1-Flash`.
- **Context window:** 1,048,576 tokens total; max output 384,000 tokens.
- **Modalities:** text + image in; text out; reasoning yes with controllable effort 1–100; tool calls, JSON output, Responses API.
- **Pricing (as of 2026-10-20):** Paid $0.30 / $1.20 per 1M input/output peak; $0.15 / $0.60 off-peak; cache hit ~$0.003 / 1M. No free tier.
- **Architecture:** 552B MoE backbone (~763B total with vision encoder), 8B active prefill / 16B active decode, Causal Encoder-Decoder, MIT license.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **90.6%** (vendor DSH Minimal; source: Hugging Face model card)
- Terminal-Bench 3.0: **30.0%**; Terminal-Bench 4.0: **31.2%**
- DeepSWE v1.1: **74.2%** (mini-SWE; source: Hugging Face model card)
- SEC-Bench Pro: **62.8%**; CyberGym: **88.1%**; ExploitGym: **15.3%**
- HLE with tools: **63.9%**; AutomationBench: **54.8%**; Agent's Last Exam: **31.8%**
- ProgramBench: **20.3%**; NL2Repo-Bench: **64.0%**
- Visual agents: Chartography w/ tools **78.9%**; BabyVision w/ tools **89.6%**; ZeroBench-main w/ tools **49.0%**
- Tau3-Banking / GDPval-AA / Claw-Eval / MCP-Atlas: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.9%** Pass@1
- HLE: **36.8%** Pass@1, **39.1%** text-only subset
- Codeforces Rating: **3471**
- MathArena Apex: **65.6%** Pass@1
- Artificial Analysis Intelligence Index: **39** #7/117 v4.3.2
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- DeepSWE v1.1: **74.2%** Resolved
- Base model: BigCodeBench **60.6%** Pass@1; HumanEval **79.4%** Pass@1; GSM8K **93.0%** EM; MATH **61.1%** EM
- SWE-bench Verified / SWE-Pro / LiveCodeBench / SciCode / Vibe Code Bench: no verified public score found for V4.1 ID

Long context:

- LongBench-V2 base 1-shot: **45.2%** EM; no MRCR / RULER / GraphWalks value published

### Normalized scores (1–100)

- **Tool use: 92/100.** Terminal-Bench 2.1 90.6% and DeepSWE 74.2% place it at frontier for tool use; capped by lack of independent Tau3/GDPval and modest TB3/4 scores.
- **Reasoning: 88/100.** GPQA Diamond 90.9% and Codeforces 3471 are frontier-adjacent; text-only HLE 36.8% caps the score.
- **Context window: 95/100.** 1M in / 384K out with compressed KV cache; no published recall-at-depth benchmark.
- **Multimodal: 68/100.** Text + image input only with native vision encoder, DocVQA 95.6 and visual-agent results lift it to top of image-in band; no audio/video or non-text output.
- **Coding: 91/100.** DeepSWE 74.2% and Terminal-Bench 2.1 90.6% are strong; absence of SWE-bench Verified/Pro and LiveCodeBench numbers limits ceiling.
- **Cost efficiency: 95/100.** $0.30/$1.20 peak, $0.15/$0.60 off-peak with cheap cache hits and MIT open weights; paid only, no free tier.
- **Overall Score: 87/100.** Mean of five quality dims (92+88+95+68+91)/5 = 86.8 → 87. Best fit: high-throughput long-context agentic coding with strong tool use, modest multimodal breadth.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
