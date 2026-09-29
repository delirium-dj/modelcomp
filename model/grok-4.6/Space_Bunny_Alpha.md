# Grok 4.6 — findings by Space Bunny Alpha

- Source: SpaceXAI (`grok-4.6`; high reasoning)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (high)
- **Short description:** SpaceXAI's frontier reasoning and agent model, with standout tool-use, terminal, customer-service, and long-horizon knowledge-work results at relatively low paid pricing. Now a superseded generation.
- **Provider / access:** SpaceXAI API (`grok-4.6`); available through 4 API providers per Artificial Analysis; also in Cursor and Grok Build. Reasoning effort supports **low, medium, high (default), and xhigh**.
- **Release / knowledge:** Released 2026-08-12. No exact training-data cutoff was shown in the reviewed Grok 4.6 pages. (Grok 4.7's public training-content summary reports data collected no later than 2026-08-20 and names Grok 4.6 as the generator of its own SFT trajectories.)
- **IDs:** `grok-4.6`; high is a reasoning configuration.
- **Context window:** 500K tokens, with **no text output limit** (SpaceXAI release notes, verified 2026-09-29). The 2026-09-24 report said the output limit "was not shown"; it is now documented as unlimited.
- **Modalities:** Text and image input; text output; reasoning supported. Audio/video are not shown for Grok 4.6 in the reviewed pages.
- **Pricing (as of 2026-09-29):** $2.00 per 1M input, $0.50 per 1M cached input, and $6.00 per 1M output **below 200K prompt tokens**; **$4 / $1 / $12 above 200K prompt tokens**. The 2026-09-24 report omitted the long-prompt tier. Artificial Analysis quotes $2/$6 with a 75% cache discount, a $1.35 blended 7:2:1 rate, and $1.86 per Intelligence Index task.
- **Architecture:** Proprietary; SpaceXAI has not disclosed parameter count. Grok 4.7 is documented as using a new, larger base model than Grok 4.6.
- **Lifecycle (changed since 2026-09-24):** **Grok 4.7 shipped 2026-09-21** as the direct successor, at the same price and speed as Grok 4.6 (plus a fast variant at 2x speed and 2x price). Grok 4.7 uses a larger base model with a longer RL run, is better at self-verification and long-context management, was trained to understand the Grok Bot harness, and improves on Grok 4.6 on both GDPval and AA-Briefcase. The 2026-09-24 report noted only that "current SpaceXAI docs emphasize Grok 4.7 as the successor"; the dated announcement and the base-model change are now confirmed. No hard discontinuation date for Grok 4.6 was published, and Artificial Analysis does **not** flag it as deprecated.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index v4.3.2: **44/100**, rank **#31/216** for the high configuration (Artificial Analysis, accessed 2026-09-29). The 2026-09-24 report already carried 44 for this page; the **rank is newly recorded**. The separate August 12 article headline of **61** refers to a different, earlier Index version and is retained as such rather than merged.
- GDPval-AA v2 Elo: **1753** (Artificial Analysis article, August 2026)
- τ³-Banking: **50.7%** (Artificial Analysis article)
- Terminal-Bench v2.1: **88.4%** (Artificial Analysis article)
- AA-Briefcase Elo: **1577**; average **~53 turns** and **~0.5B input tokens** (Artificial Analysis article)
- Output speed: **64.9 tokens/s**; time to first token **31.26s** (Artificial Analysis, accessed 2026-09-29). **New this cycle.** AA ranks speed **#109/216** and classes the model as "slower than average" against a 79 t/s median, with TTFT at the higher end versus a 3.89s reasoning median.
- Cost per task: **$0.84** in the August article; the current v4.3.2 model page reports **$1.86** for the high configuration — a 2.2x increase driven by the Index re-base, retained with its source context.
- Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **44** on the current v4.3.2 high page (article-era headline under the prior Index version was 61); the source configuration and Index version differ and are labeled.
- Verbosity: **94M** output tokens on the Intelligence Index vs. an 88M median
- GPQA Diamond, HLE, LCR/MLCR, CritPt, AA-Omniscience, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public exact value found**
- LiveCodeBench: **no verified public exact value found**
- SciCode / AA-SciCode: **no verified public exact value found**
- Vibe Code Bench: **no verified public exact value found**
- DeepSWE / Coding Index / other: **no verified public exact value found**
- Indirect: Grok 4.7 is described as SpaceXAI's most capable coding model and improves on GDPval and AA-Briefcase over Grok 4.6, but **no exact Grok 4.6 coding score** is published for it.

Long context:

- No public retrieval-at-length result for Grok 4.6 was found. The verified capacity is 500K input tokens with no text output limit. Grok 4.7 is documented as better at managing longer context.

Sources consulted: [Artificial Analysis Grok 4.6 model page](https://artificialanalysis.ai/models/grok-4-6), [Artificial Analysis Grok 4.6 article](https://artificialanalysis.ai/articles/grok-4-6-benchmarks-and-analysis), [Introducing Grok 4.7 (SpaceXAI, 2026-09-21)](https://x.ai/news/grok-4-7), [SpaceXAI release notes](https://docs.x.ai/developers/release-notes), and [Public Summary of Training Content for Grok 4.7](https://media.x.ai/v1/website/public-summary-of-training-content-for-grok-4-7-ccaa1b02.pdf), accessed 2026-09-29.

### Normalized scores (1–100)

- **Tool use: 96/100.** Unchanged. GDPval-AA Elo 1753, τ³-Banking 50.7%, Terminal-Bench v2.1 88.4%, and AA-Briefcase 1577 are direct strong agent/tool measurements. The current high-page AA Index of 44 is lower, so the score reflects the strongest exact published evidence while preserving the source caveat.
- **Reasoning: 91/100.** Unchanged. The current v4.3.2 high page reports 44; the 61 headline belongs to the prior Index version. Exact GPQA/HLE values are absent, so confidence is capped.
- **Context window: 92/100.** **Changed from 90.** The verified 500K input capacity is unchanged, but SpaceXAI now documents **no text output limit** rather than an unstated one, which removes a previously unknown constraint on long single-response agentic work. Still below the 1M tier and with no retrieval-at-length score.
- **Multimodal: 65/100.** Unchanged. Text and image input with text output; audio/video not shown.
- **Coding: 90/100.** Unchanged. Terminal-Bench v2.1 88.4% and frontier agent positioning support strong coding-agent performance, while exact SWE/DeepSWE/LiveCodeBench values are unavailable. The 2026-09-21 Grok 4.7 launch positions 4.6 as the prior generation.
- **Cost efficiency: 86/100.** Unchanged. $2/$6 with a $0.50 cache rate is unusually competitive for frontier agent performance and Grok 4.7 is served at the same price. Not lowered despite the $0.84 → $1.86 per-task rise because that reflects Index re-basing, not a price change; not a free tier, and prompts above 200K tokens cost 2x.
- **Overall Score: 86.8/100.** (96 + 91 + 92 + 65 + 90) / 5 = 86.8. **Changed from 86.4** — driven by Context window 90 → 92 once the unlimited text output limit was documented. The material finding this cycle is succession: Grok 4.7 (2026-09-21, larger base model) supersedes Grok 4.6 on GDPval and AA-Briefcase at identical price and speed, with no published discontinuation date. Best fit: cost-sensitive tool-heavy agents and long-running customer-service or coding workflows, with a recommendation to pin the exact provider/configuration and to prefer Grok 4.7 for new deployments.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Artificial Analysis model/article metadata, the SpaceXAI Grok 4.7 announcement and release notes, and the public training-content summary; conflicting AA configurations and Index versions are explicitly labeled. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
