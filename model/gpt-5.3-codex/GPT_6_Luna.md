# GPT-5.3-Codex — findings by GPT-6 Luna

- Source: OpenAI/GPT-5.3-Codex
- Date: 2026-10-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-5.3-Codex
- **Short description:** OpenAI's proprietary agentic coding model for long-running software engineering and computer-use tasks. It combines GPT-5.2-Codex's coding performance with GPT-5.2's reasoning/professional-knowledge capabilities; Codex Spark and other GPT-5.x models are separate variants.
- **Provider / access:** OpenAI Codex and the OpenAI API. The exact API model ID is `gpt-5.3-codex`; the official model page documents the **Responses API only** (Chat Completions is unsupported). The current OpenAI API docs mark it **Deprecated** but do not give a retirement date; OpenAI's product page and live model catalogs still describe the route. BenchLM's Oct. 29 page calls lifecycle “active,” conflicting with the first-party API status, so the official deprecation label is used here.
- **Release / knowledge:** Released February 5, 2026 ([OpenAI announcement](https://openai.com/index/introducing-gpt-5-3-codex/)). API docs list a knowledge cutoff of August 31, 2025.
- **IDs:** API model `gpt-5.3-codex`; default snapshot `gpt-5.3-codex`. No separate free API ID verified.
- **Context window:** 400,000 total tokens; max input 272,000 and max output 128,000, per the [OpenAI API model docs](https://developers.openai.com/api/docs/models/gpt-5.3-codex.md). No exact-model long-context retrieval score found.
- **Modalities:** Text and image input; text output. Reasoning effort settings: low, medium, high, xhigh. The model is designed for tool-using Codex/Responses workflows; no audio/video or non-text output support verified.
- **Pricing (as of 2026-10-29):** OpenAI API per 1M tokens: **$1.75 input / $0.175 cached input / $14 output**. No general free API tier verified; product-plan inclusion is separate from API pricing.
- **Architecture:** Proprietary closed weights; parameter count and internal architecture not disclosed. The system card describes the deployment safety posture, including treatment as High capability in cybersecurity; that is a safety classification, not an architecture description.

### Raw benchmarks found

Three independent public web searches were followed by checks of OpenAI's [release announcement](https://openai.com/index/introducing-gpt-5-3-codex/), [system-card page](https://openai.com/index/gpt-5-3-codex-system-card/), exact [API model docs](https://developers.openai.com/api/docs/models/gpt-5.3-codex.md), and BenchLM's exact-model benchmark ledger. OpenAI says every evaluation in the release-post table was run with **xhigh reasoning effort**. Keep Terminal-Bench 2.0 separate from 2.1 and distinguish SWE-bench Pro from SWE-bench Verified.

Agent / tool use:

- Terminal-Bench 2.0: **77.3%**; OSWorld-Verified: **64.7%**; GDPval wins or ties: **70.9%** (OpenAI release-post comparison table).
- The release post describes GPT-5.3-Codex as a long-running, steerable agent; the official [system card](https://openai.com/index/gpt-5-3-codex-system-card/) says the release was treated as High capability in cybersecurity under OpenAI's Preparedness Framework. This safety designation is not a benchmark score.
- No exact-model Tau3-Banking or Claw-Eval result verified.

Reasoning / knowledge:

- OpenAI describes reasoning and professional knowledge as inherited from GPT-5.2, but the public release-table results checked here are coding, agent, computer-use, and work-task evaluations. No exact-GPT-5.3-Codex GPQA Diamond, HLE, AIME, or Intelligence Index score was verified; GPT-5.2 results are not substituted.

Coding:

- SWE-bench Pro (Public): **56.8%**; Terminal-Bench 2.0: **77.3%** (OpenAI release-post table).
- SWE-Lancer IC-Diamond: **81.4%**; Cybersecurity Capture the Flag Challenges: **77.6%** (same table). OpenAI states the comparison table's evaluations use xhigh reasoning effort.
- BenchLM's exact-model ledger also lists LiveCodeBench (Vals AI): **87.3%**, SWE-Rebench: **58.2%**, and Vibe Code Bench v1.1 (Vals AI): **61.77%**. It separately lists SWE-bench Verified **85%** as provider-exact and JobBench **33.7%** from the JobBench paper; these are distinct from SWE-bench Pro and OpenAI's release-post set.

Long context and multimodal:

- Verified context limit is 400K; no exact-model MRCR/RULER retrieval score found.
- OpenAI docs confirm image input and text output; no exact-model image benchmark result found.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.0 at 77.3%, OSWorld-Verified 64.7%, and GDPval wins/ties 70.9% show strong agent/computer-use capability; the Terminal-Bench result is version 2.0, below the methodology's 2.1 frontier reference, and no Tau3/Claw result was verified.
- **Reasoning: 75/100.** OpenAI positions the model as combining GPT-5.2 reasoning, but no exact-model GPQA/HLE/AIME or comparable reasoning score was found; scores from GPT-5.2 are not carried over.
- **Context window: 80/100.** The documented 400K total context is near the upper end of the methodology's 200K–500K tier; no retrieval score justifies a higher tier.
- **Multimodal: 65/100.** Verified image input fits the methodology's image-input band; output is text-only and no exact-model vision benchmark was found.
- **Coding: 86/100.** SWE-bench Pro 56.8%, SWE-Lancer IC-Diamond 81.4%, and Terminal-Bench 2.0 77.3% are strong; limits include use of TB 2.0 rather than 2.1, no exact-model SciCode result, and mixed independent/canonical benchmark harnesses.
- **Cost efficiency: 78/100.** $1.75/$14 per 1M input/output tokens is above the methodology's ~$1.25/$4.25 reference, especially for output-heavy coding; the $0.175 cached-input rate helps. No exact-model cost-per-task comparison was verified.
- **Overall Score: 78/100.** Half-up mean of the five quality dimensions (84, 75, 80, 65, 86 = 78), excluding cost; best suited to long-running coding and computer-use workflows, with high output-token prices and limited standalone reasoning/multimodal evidence as trade-offs.

---

## Signature

- Provided by: **GPT-6 Luna (openai/gpt-6-luna-fast)** — 2026-10-29
- Method: Three independent public search queries, followed by primary-source verification against OpenAI's release post, system-card page, and exact API docs; BenchLM's provider-exact and Vals AI rows were used as a cross-check. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
