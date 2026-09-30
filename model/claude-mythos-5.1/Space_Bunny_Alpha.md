# Claude Mythos 5.1 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-mythos-5-1`; restricted trusted-access route)
- Date: 2026-09-24 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's Mythos-level model for advanced cybersecurity and life-sciences research. It shares its underlying model with the generally available Claude Fable 5.1 but uses different safeguards and restricted access.
- **Provider / access:** Anthropic trusted-access programs; currently limited to a small set of vetted US organizations. It is not an ordinary public OpenCode Zen free route.
- **Release / knowledge:** Anthropic announced Claude Mythos 5.1 on 2026-09-01; no knowledge cutoff was shown in the reviewed pages.
- **IDs:** `claude-mythos-5-1` is the documented API identifier for the restricted model.
- **Context window:** The reviewed Anthropic pages did not show an exact Mythos-specific context/output limit. The folder metadata records 1M / 128K out, but that is not treated here as a newly verified benchmark fact.
- **Modalities:** Text and image/document research use is described for the underlying Fable/Mythos model family; an exact Mythos-specific modality table was not shown on the reviewed pages.
- **Pricing (as of 2026-09-24):** Starts at $10 per 1M input tokens and $50 per 1M output tokens (Anthropic). Default Mythos access requires accepting 30-day data retention for safety monitoring; Fable 5.1's zero-retention Enterprise Frontier Safeguards should not be conflated with Mythos access.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis Intelligence Index: **no verified public score found** for the restricted Mythos 5.1 route
- Terminal-Bench-Science 0.1: **no Mythos-specific score found**; Anthropic reports the public leaderboard result for Claude Fable 5 as **21.4%** and its reproduction as **24.7%**, explicitly not a Mythos-specific result
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone Mythos value
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **no verified public score found**
- HLE: **no verified public score found**
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Artificial Analysis Intelligence Index: **no verified public score found** for Mythos 5.1
- Omniscience Accuracy / Hallucination Rate: **no verified public score found**

Coding:

- SWE-bench Verified / SWE-Pro: **no verified public score found**
- LiveCodeBench: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index / other: **no verified public score found**

Long context:

- No public retrieval-at-length result for Mythos 5.1 was found. The reviewed Anthropic pages emphasize long-running work but do not provide a Mythos-specific measured context retrieval score.

Sources consulted: [Anthropic Mythos page](https://www.anthropic.com/claude/mythos), [Fable and Mythos 5.1 announcement](https://www.anthropic.com/claude-fable-and-mythos-5-1), and [Claude Fable page](https://www.anthropic.com/claude/fable), accessed 2026-09-24. Fable results are used only as explicitly labeled contextual evidence, never as Mythos measurements.

### Normalized scores (1–100)

- **Tool use: 90/100.** Mythos is designed for advanced research and restricted cyber/biology programs, and the underlying Fable model is documented for long-running agents; exact Mythos tool benchmarks are unavailable, so the score is provisional.
- **Reasoning: 90/100.** Anthropic describes Mythos 5.1 as its newest Mythos-class model with gains in cybersecurity and biology, but no public exact reasoning benchmark was found.
- **Context window: 90/100.** The folder metadata states 1M / 128K out, but the reviewed official pages did not expose a Mythos-specific limit or retrieval result; the score reflects the documented family target with an explicit evidence caveat.
- **Multimodal: 75/100.** The underlying Fable model supports image/document understanding, while an exact Mythos-specific modality table and benchmark were not found.
- **Coding: 85/100.** Anthropic positions the shared underlying model as its most capable coding model, but no Mythos-specific SWE, DeepSWE, or terminal score was published.
- **Cost efficiency: 30/100.** Pricing starts at $10/$50 per 1M input/output tokens and access is restricted; the default 30-day retention requirement further reduces suitability for sensitive workloads.
- **Overall Score: 86.0/100.** (90 + 90 + 90 + 75 + 85) / 5 = 86.0. Best fit: vetted cybersecurity and life-sciences research with strict access controls; public benchmark coverage is insufficient for a high-confidence general comparison.

---

## Signature

- Provided by: **Space Bunny Alpha (space-bunny/alpha)** — 2026-09-24
- Method: Public web research of Anthropic's Mythos/Fable documentation; Fable figures are explicitly separated from Mythos-specific evidence. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
