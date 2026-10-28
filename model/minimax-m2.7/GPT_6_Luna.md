# MiniMax-M2.7 — findings by GPT-6 Luna

- Source: MiniMax/MiniMax-M2.7 (`MiniMaxAI/MiniMax-M2.7`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax-M2.7
- **Short description:** MiniMax's open-weight agent model for professional software engineering, office automation, and complex tool workflows. MiniMax also highlights agent-team collaboration and the model's participation in its own development cycle.
- **Provider / access:** Hugging Face weights `MiniMaxAI/MiniMax-M2.7`; hosted API through MiniMax and third-party providers.
- **Release / knowledge:** Released 2026-03-18 in provider catalogs; cutoff not stated.
- **IDs:** `MiniMaxAI/MiniMax-M2.7`; OpenRouter route `minimax/minimax-m2.7`.
- **Context window:** 204,800 tokens on the OpenRouter listing; maximum output 131,072 tokens on that route.
- **Modalities:** Text input/output; reasoning and tool use. No image/audio/video input documented for this checkpoint.
- **Pricing (as of 2026-10-28):** OpenRouter lists $0.30 input, $0.06 cached input, and $1.20 output per 1M tokens. Open weights are published under MiniMax's model-specific license; check the linked license for reuse conditions.
- **Architecture:** Sparse MoE; inclusionAI's published comparison identifies the M2.7 configuration as 230B total / 10B active parameters. Parameter count is not stated in the MiniMax model-card text reviewed.

### Raw benchmarks found

MiniMax's model card reports the following scores. These are publisher-reported; benchmark harness information is provided in the linked card.

Agent / tool use:

- GDPval-AA: **1495 Elo**; Toolathon: **46.3%**; MM Claw end-to-end: **62.7%** (MiniMax model card).
- Skill compliance across 40+ complex skills: **97%** (MiniMax model card; publisher-defined compliance measure).

Reasoning / knowledge:

- MLE-Bench Lite: **66.6% medal rate** across 22 machine-learning competitions (MiniMax model card).
- No verified GPQA Diamond, HLE, or Artificial Analysis Intelligence Index score was found in the text-readable model card.

Coding:

- SWE-Bench Pro: **56.22%**; SWE-Bench Multilingual: **76.5%**; Multi-SWE-Bench: **52.7%** (MiniMax model card).
- VIBE-Pro: **55.6%**; Terminal Bench 2: **57.0%**; NL2Repo: **39.8%** (MiniMax model card).

Long context:

- Hosted context specification is 204,800 tokens; no MRCR/RULER retrieval result was found.

### Normalized scores (1–100)

- **Tool use: 86/100.** GDPval-AA 1495 Elo and MM Claw 62.7% are strong agent evidence; Toolathon 46.3% and publisher-only harness details cap the score.
- **Reasoning: 78/100.** MLE-Bench Lite medal rate 66.6% supports complex task ability, but no broad knowledge/reasoning benchmark was verified.
- **Context window: 78/100.** 204.8K is useful capacity, but no retrieval score validates long-context accuracy.
- **Multimodal: 15/100.** The documented checkpoint is text-only input/output.
- **Coding: 88/100.** SWE-Pro 56.22%, SWE Multilingual 76.5%, and Terminal Bench 2 57.0% indicate strong coding, with publisher-run harnesses limiting comparability.
- **Cost efficiency: 88/100.** Open weights and $0.30/$1.20 hosted rates are competitive, but hardware requirements and license terms matter.
- **Overall Score: 69/100.** Half-up mean of the five quality dimensions (86+78+78+15+88)/5 = 69; a strong candidate for text-based coding agents and office automation, not multimodal work.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research from MiniMax's model card and inclusionAI's comparative chart. Benchmark values are attributed to the source and publisher; normalized scores are independent interpretations.
- Sources: [MiniMax-M2.7 model card](https://huggingface.co/MiniMaxAI/MiniMax-M2.7); [MiniMax M2.7 repository](https://github.com/MiniMax-AI/MiniMax-M2.7); [inclusionAI Ling 3.0 Flash model comparison](https://huggingface.co/inclusionAI/Ling-3.0-flash); [OpenRouter listing](https://openrouter.ai/minimax/minimax-m2.7).
