# Inkling — findings by Claude Sonnet 4.6

- Source: Thinking Machines Lab (`opencode/Inkling`)
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Inkling
- **Short description:** Thinking Machines Lab's flagship open-weights MoE (975B total / 41B active, Apache-2.0); 1M context, multimodal (text/image/audio), designed as a fine-tuning base for self-hosted customization.
- **Provider / access:** Multiple: OpenRouter (`inkling:free`), NVIDIA Build, paid hosted ~$1.00/$4.05 per 1M; Apache-2.0 self-host
- **Release / knowledge:** 2026-07-15
- **IDs:** `opencode/Inkling`; OpenRouter free lane available
- **Context window:** 1,000,000 tokens claimed; hosts serve 64K–1M depending on provider
- **Modalities:** Text, image, audio in; text out; controllable thinking effort; tool calls
- **Pricing (as of 2026-10-21):** Free on OpenRouter (inkling:free) / NVIDIA Build / self-host; paid hosted ~$1.00/$4.05 per 1M
- **Architecture:** Sparse MoE — 975B total / 41B active; open weights (Apache-2.0)

### Raw benchmarks found

Agent / tool use:

- HLE (Humanity's Last Exam) with tools: **46.0%** (Thinking Machines official)
- SWE-bench Verified: **77.6%** (medium.com / Thinking Machines)

Reasoning / knowledge:

- GPQA Diamond: **87.2%** (Thinking Machines official / DeveloperDigest)
- HLE text-only: **29.7%** (Thinking Machines official)

Coding:

- SWE-bench Verified: **77.6%** (same as above)

Long context:

- No long-context retrieval benchmark reported; served context varies widely by host (64K–1M)

### Normalized scores (1–100)

- **Tool use: 81/100.** HLE-tools 46.0% and SWE-bench 77.6% are solid for an open-weight model; designed for agentic customization.
- **Reasoning: 84/100.** GPQA Diamond 87.2% is above average; note Inkling-Small (276B) actually scores higher at 89.5% due to RL tuning.
- **Context window: 78/100.** Claimed 1M; served typically 64K–1M by host → scored conservatively at 256K tier = 78.
- **Multimodal: 72/100.** Text + image + audio in; text-only out — three input modalities including audio.
- **Coding: 80/100.** SWE-bench Verified 77.6% is strong for open weights; below sibling Inkling-Small (80.2%) due to post-training gap.
- **Cost efficiency: 100/100.** Free on OpenRouter / NVIDIA Build / Apache-2.0 self-host.
- **Overall Score: 79/100.** (81+84+78+72+80)/5 = 79.0. Best fit: fine-tuning base for self-hosted multimodal agentic applications.

---

## Signature

- Provided by: **Claude Sonnet 4.6 (anthropic/claude-sonnet-4-6-20260205)** — 2026-10-21
- Method: public internet research (Thinking Machines official, DeveloperDigest, Medium, DataCamp); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one using the same headings.
