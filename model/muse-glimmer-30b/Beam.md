# Muse Glimmer 30B — findings by Beam

- Source: Meta/Muse Glimmer 30B, `meta/muse-glimmer-30b`
- Date: 2026-10-17 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Muse Glimmer 30B
- **Short description:** Meta's first Apache 2.0 open-weight model (Aug 10, 2026): 29.6B dense, distilled from Muse Spark 1.2, for local agents on consumer GPUs. 131K context. Open weights.
- **Provider / access:** HuggingFace `meta-models/Muse-Glimmer-30B`; NVIDIA NIM; OpenRouter.
- **Release / knowledge:** Released 2026-08-10; knowledge cutoff 2026-01-04.
- **IDs:** `meta/muse-glimmer-30b`
- **Context window:** 131,072 tokens; max output 131,072.
- **Modalities:** text, image in; text out; reasoning yes; tool calling yes. Open weights (Apache 2.0).
- **Pricing (as of 2026-10-17):** Free (open weights, $0/$0).
- **Architecture:** 29.6B dense, Apache 2.0, distilled from Muse Spark 1.2, 1.8B vision encoder (ViT-G/14).

### Raw benchmarks found

Agent / tool use:

- Agentic public-lane (BenchLM): **25** (estimated #104/128)
- MCP Atlas (Public): **75.5%**
- DeepSearch QA: **74.6%**
- τ³-Banking: **23.5%**
- WildClawBench: **47.6%**
- GDPval-AA: **953 Elo**
- IFBench: **77.0%**

Reasoning / knowledge:

- Reasoning public-lane (BenchLM): **83.1** (unranked, 2 rows)
- GPQA Diamond: **83.5%**
- AIME 2026: **94.7%**
- HLE Text: **22.0%**
- AA-LCR: **80.0%**
- Beam128K: **65.1%**
- MRCR: not reported

Coding:

- Coding public-lane (BenchLM): **30.5** (estimated #94/150)
- SWE-bench Verified: **76.0%**
- SWE-bench Pro: **51.2%**
- Terminal-Bench: **51.7%**
- LiveCodeBench: not reported

Long context:

- 131K window; AA-LCR 80.0%, Beam128K 65.1%.

Multimodal:

- Multimodal public-lane (BenchLM): **65.1** (#41/54)
- CharXiv Reasoning: **78.8%**
- ScreenSpot Pro: **75.4%**
- OmniDocBench 1.5: **75.8%**

### Normalized scores (1–100)

- **Tool use: 72/100.** Agentic lane #104/128 (25), MCP Atlas 75.5%, DeepSearch QA 74.6%, τ³-Banking 23.5%, GDPval 953; caps at WildClawBench 47.6%.
- **Reasoning: 74/100.** GPQA 83.5%, AIME 94.7%, HLE 22.0%, AA-LCR 80.0%, Beam128K 65.1%; caps at HLE 22.0%.
- **Context window: 70/100.** 131K window; AA-LCR 80.0%, Beam128K 65.1%.
- **Multimodal: 78/100.** Text/image in; CharXiv 78.8%, ScreenSpot Pro 75.4%, OmniDocBench 75.8%.
- **Coding: 68/100.** SWE-bench Verified 76.0%, SWE-bench Pro 51.2%, Terminal-Bench 51.7%, coding lane #94/150 (30.5).
- **Cost efficiency: 100/100.** Free (open weights).
- **Overall Score: 72.4/100.** Mean of five quality dims (BenchLM aggregate 41.18); best-fit for local agentic + multimodal at zero cost.

---

## Signature

- Provided by: **Beam (Beam)** — 2026-10-17
- Method: public internet research (Meta/NVIDIA NIM, CrucibleMark, BenchLM, OpenCode data, Tech Insider); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.<|end|><|start|>2>