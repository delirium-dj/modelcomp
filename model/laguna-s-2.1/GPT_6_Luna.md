# Laguna S 2.1 — findings by GPT-6 Luna

- Source: Poolside/Laguna S 2.1 (`poolside/Laguna-S-2.1`)
- Date: 2026-10-28 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Laguna S 2.1
- **Short description:** Poolside's open-weight MoE coding-agent model for software engineering and long-horizon work. The model card publishes coding, agent, and codebase-Q&A evaluations.
- **Provider / access:** Hugging Face weights `poolside/Laguna-S-2.1`; hosted routes include OpenRouter and other API gateways.
- **Release / knowledge:** Released 2026-07-21; cutoff not stated.
- **IDs:** `poolside/Laguna-S-2.1`; OpenRouter route `poolside/laguna-s-2.1`.
- **Context window:** 1,048,576 tokens per Poolside's model card; maximum output varies by serving provider.
- **Modalities:** Text input/output; reasoning and tool use. No image/audio/video input documented for the checkpoint.
- **Pricing (as of 2026-10-28):** OpenRouter listing: $0.09 input, $0.009 cached input, and $0.18 output per 1M tokens. It is also available as open weights under OpenMDW-1.1, so self-hosting has no per-token license fee.
- **Architecture:** 118B total / approximately 8B active MoE parameters; OpenMDW-1.1 license.

### Raw benchmarks found

Poolside's model card lists the following results as of 2026-07-21. It marks Terminal-Bench and DeepSWE as third-party Artificial Analysis results, SWE Atlas as Scale AI leaderboard data, and Toolathlon Verified as its official leaderboard result; the remaining results are Poolside-reported.

Agent / tool use:

- Terminal-Bench 2.1: **70.2%** (Artificial Analysis, as cited by Poolside).
- Toolathlon Verified: **49.7%** (official benchmark leaderboard, as cited by Poolside).
- SWE Atlas Codebase QnA: **46.2%** (Scale AI leaderboard, as cited by Poolside).

Reasoning / knowledge:

- No verified GPQA, HLE, or Artificial Analysis Intelligence Index score was found in the model card.

Coding:

- SWE-Bench Multilingual: **78.5%**; SWE-Bench Pro (public dataset): **59.4%** (Poolside model card).
- DeepSWE: **40.4%** (Artificial Analysis, as cited by Poolside).

Long context:

- Context window: 1,048,576 tokens; no MRCR/RULER retrieval score was found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 70.2 and Toolathlon 49.7 indicate useful agent performance; no broad independent agent index was verified.
- **Reasoning: 75/100.** The sources reviewed provide no broad reasoning benchmark, so this is conservatively capped despite strong coding-agent results.
- **Context window: 90/100.** 1M-token capacity is top-tier, but retrieval quality at that span is unmeasured.
- **Multimodal: 15/100.** The documented checkpoint is text-only.
- **Coding: 85/100.** SWE-Bench Multilingual 78.5 and SWE-Pro 59.4 are strong, while DeepSWE 40.4 and third-party/harness variation cap the score.
- **Cost efficiency: 95/100.** OpenMDW-1.1 weights and low hosted token rates are attractive; the large model still has meaningful self-hosting compute costs.
- **Overall Score: 70/100.** Half-up mean of the five quality dimensions (84+75+90+15+85)/5 = 69.8; best for text-based repository agents with long context.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna)** — 2026-10-28
- Method: Public research from Poolside's Hugging Face model card and linked benchmark sources. Third-party versus Poolside-reported results are distinguished; normalized scores are independent interpretations.
- Sources: [Poolside Laguna S 2.1 model card and benchmarks](https://huggingface.co/poolside/Laguna-S-2.1); [Poolside release article](https://poolside.ai/blog/introducing-laguna-s-2-1); [OpenRouter listing](https://openrouter.ai/poolside/laguna-s-2.1).
