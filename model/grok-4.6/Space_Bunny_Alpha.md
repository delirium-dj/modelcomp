# Grok 4.6 — findings by Space Bunny Alpha

- Source: SpaceXAI (`grok-4.6`; high reasoning)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6 (high)
- **Short description:** SpaceXAI's frontier reasoning and agent model, with standout tool-use, terminal, customer-service, and long-horizon knowledge-work results at relatively low paid pricing.
- **Provider / access:** SpaceXAI API (`grok-4.6`); official docs and Artificial Analysis identify the model. Current SpaceXAI docs emphasize Grok 4.7 as the successor.
- **Release / knowledge:** Artificial Analysis lists August 12, 2026; no exact training-data cutoff was shown in the reviewed Grok 4.6 pages.
- **IDs:** `grok-4.6`; high is a reasoning configuration.
- **Context window:** 500K tokens (Artificial Analysis and SpaceXAI Grok model documentation, accessed 2026-09-24). Exact output limit was not shown.
- **Modalities:** Text and image input; text output; reasoning supported. Audio/video are not shown for Grok 4.6 in the reviewed pages.
- **Pricing (as of 2026-09-24):** $2.00 per 1M input and $6.00 per 1M output tokens; cache hits $0.50 per 1M according to Artificial Analysis.
- **Architecture:** Proprietary; SpaceXAI has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **61** in the August 12 article; the current model page reports **44** for the separately labeled high configuration / revised benchmark page. Both values are retained with their source context rather than merged.
- GDPval-AA v2 Elo: **1753** (Artificial Analysis article, August 2026)
- τ³-Banking: **50.7%** (Artificial Analysis article)
- Terminal-Bench v2.1: **88.4%** (Artificial Analysis article)
- AA-Briefcase Elo: **1577**; average **~53 turns** and **~0.5B input tokens** (Artificial Analysis article)
- Cost per task: **$0.84** in the article; current model page reports **$1.86** for the high configuration.
- Claw-Eval, Toolathon, MCP-Atlas, and SWE Atlas: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index: **61** (article headline result) / **44** (current high page); source configuration differs.
- GPQA Diamond, HLE, LCR/MLCR, CritPt, and hallucination metrics: **no verified public exact value found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public exact value found**
- LiveCodeBench: **no verified public exact value found**
- SciCode / AA-SciCode: **no verified public exact value found**
- Vibe Code Bench: **no verified public exact value found**
- DeepSWE / Coding Index / other: **no verified public exact value found**

Long context:

- No public retrieval-at-length result for Grok 4.6 was found. The verified context-window capacity is 500K tokens.

Sources consulted: [Artificial Analysis Grok 4.6 article](https://artificialanalysis.ai/articles/grok-4-6-benchmarks-and-analysis), [Artificial Analysis Grok 4.6 model page](https://artificialanalysis.ai/models/grok-4-6), and [SpaceXAI model documentation](https://docs.x.ai/docs/models/grok-4-6), accessed 2026-09-24.

### Normalized scores (1–100)

- **Tool use: 96/100.** GDPval-AA Elo 1753, τ³-Banking 50.7%, Terminal-Bench v2.1 88.4%, and AA-Briefcase 1577 are direct strong agent/tool measurements. The current high-page AA Index is lower, so the score reflects the strongest exact published evidence while preserving the source caveat.
- **Reasoning: 91/100.** The article's AA Intelligence Index headline is 61, but the current high page reports 44; exact GPQA/HLE values are absent, so confidence is capped.
- **Context window: 90/100.** 500K is a verified strong long-context capacity, below the 1M tier; no retrieval-at-length score was found.
- **Multimodal: 65/100.** Text and image input with text output are supported; audio/video are not shown.
- **Coding: 90/100.** Terminal-Bench v2.1 88.4% and frontier agent positioning support strong coding-agent performance, while exact SWE/DeepSWE/LiveCodeBench values are unavailable.
- **Cost efficiency: 86/100.** $2/$6 paid pricing and a $0.50 cache rate are unusually competitive for frontier agent performance; this is not a free tier.
- **Overall Score: 86.4/100.** (96 + 91 + 90 + 65 + 90) / 5 = 86.4. Best fit: cost-sensitive tool-heavy agents and long-running customer-service or coding workflows, with a recommendation to pin the exact provider/configuration because the two AA pages report different scores.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Artificial Analysis article/model metadata and SpaceXAI documentation; conflicting AA configurations are explicitly labeled. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
