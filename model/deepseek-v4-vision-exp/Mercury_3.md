# DeepSeek V4 Flash Vision Exp — findings by Mercury 3

- Source: DeepSeek/DeepSeek-V4-Flash-Vision-Exp
- Date: 2026-11-03 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek-V4-Flash-Vision-Exp
- **Short description:** DeepSeek's first experimental multimodal model in the V4 family (released 2026-08-21): the V4-Flash architecture plus visual modules, unlocking multimodal agent capabilities (ApexBench 36.5%, Chartography 64.3%) while maintaining text-agent parity with V4-Flash-0731; MIT license, open weights, 1M context.
- **Provider / access:** DeepSeek API/platform (`deepseek-v4-flash-vision-exp`), open weights on Hugging Face; 16 providers per models.dev (incl. DeepInfra).
- **Release / knowledge:** Released 2026-08-21; knowledge cutoff not published.
- **IDs:** `deepseek-ai/DeepSeek-V4-Flash-Vision-Exp` (HF; `deepseek-v4-flash-vision-exp` API; `max` reasoning effort used in evals).
- **Context window:** 1,000,000 tokens (1M) total; max output 384,000 (models.dev).
- **Modalities:** text + image input, text output; reasoning (extended thinking); tool calls; DSpark speculative decoding.
- **Pricing (as of 2026-11-03):** open weights (MIT); hosted/free routes listed at $0.00 on models.dev; DeepSeek platform pricing follows the Flash family (~$0.28/$0.42-class, unverified for this exp variant).
- **Architecture:** 305B params (HF), MoE with DFlash attention and Hyper-Connections; MIT license, open weights.

### Raw benchmarks found

Agent / tool use (DeepSeek card, DeepSeek Harness minimal mode, max reasoning):

- Terminal-Bench 2.1: **83.9%**; Toolathlon-Verified: **75.9%**; CyberGym: **75.3%**; DSBench-Hard: **63.6%**; NL2Repo: **57.7%**; AutomationBench (Public): 25.7%
- ApexBench (Pass@1): **36.5%** (vs 26.2%† for 0731; †ignores multimodal input); Agents' Last Exam: 27.3%

Multimodal agent:

- Chartography: **64.3%**; ZeroBench (Pass@5): **35.0%**

Coding:

- Terminal-Bench 2.1 83.9%; NL2Repo 57.7%; DeepSWE: **59.3%**; Toolathlon-Verified 75.9%; DSBench-Hard 63.6%

Long context:

- 1M window with 384K output; no MRCR/LCR figure verified in sources reviewed.

Reasoning / knowledge:

- No GPQA/HLE/ARC rows published on the card (text-only parity with V4-Flash-0731 claimed) — reasoning scored conservatively on family basis; flagged.

Multimodal:

- image input (first V4 multimodal); Chartography 64.3%, ZeroBench 35% pass@5; no MMMU/Video rows verified.

### Normalized scores (1–100)

- **Tool use: 85/100.** TB2.1 83.9%, Toolathlon 75.9%, CyberGym 75.3%, DSBench-Hard 63.6% — strong text-agent profile; capped by AutomationBench 25.7% and Agents' Last Exam 27.3%.
- **Reasoning: 75/100.** No verified GPQA/HLE/ARC rows — scored conservatively on family basis (V4-Flash lineage); flag for re-verification.
- **Context window: 90/100.** 1M with 384K output; no deep-retrieval figure verified.
- **Multimodal: 84/100.** Image input with meaningful vision-agent gains (Chartography 64.3%, ZeroBench 35%); no MMMU/Video rows verified; text-only output.
- **Coding: 84/100.** TB2.1 83.9% and Toolathlon 75.9% strong; DeepSWE 59.3% and NL2Repo 57.7% mid.
- **Cost efficiency: 95/100.** MIT open weights — exceptional value; $0 hosted/free routes listed on models.dev.
- **Overall Score: 84/100.** Mean of (85+75+90+84+84)/5 = 83.6 → 84. A capable open multimodal agentic model; missing standalone reasoning rows keep the core score capped.

---

## Signature

- Provided by: **Mercury 3 (inception/mercury-3)** — 2026-11-03
- Method: public internet research (DeepSeek model card, models.dev registry, OpenRouter/DeepInfra routing); scores are normalized 1–100 interpretations, not official vendor scores. AA/BenchLM do not list this model — evidence is vendor/registry-published; reasoning dim not independently verified (flagged).
- Reference URLs:
  - [DeepSeek-V4-Flash-Vision-Exp model card (Hugging Face)](https://huggingface.co/deepseek-ai/DeepSeek-V4-Flash-Vision-Exp)
  - [DeepSeek-V4-Flash-Vision-Exp — models.dev registry (16 providers, 1M, MIT)](https://models.dev/models/deepseek/deepseek-v4-flash-vision-exp)
  - [DeepSeek V4 intro/API docs](https://api-docs.deepseek.com/)
