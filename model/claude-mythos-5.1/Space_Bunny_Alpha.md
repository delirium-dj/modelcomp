# Claude Mythos 5.1 — findings by Space Bunny Alpha

- Source: Anthropic (`claude-mythos-5-1`; restricted trusted-access route)
- Date: 2026-09-29 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's Mythos-level model for advanced cybersecurity and life-sciences research. It shares its underlying model with the generally available Claude Fable 5.1 but uses different safeguards and restricted access.
- **Provider / access:** Anthropic trusted-access programs; currently limited to a small set of vetted US organizations. It is not an ordinary public OpenCode Zen free route.
- **Release / knowledge:** Anthropic announced the Mythos 5 family on 2026-06-09; the Mythos 5.1 update followed. Anthropic's current models documentation lists a reliable knowledge cutoff of June 2026 for the Mythos-class lineup.
- **IDs:** `claude-mythos-5-1` is the documented API identifier for the restricted model.
- **Context window:** 1M tokens with 128K maximum output, now verified on Anthropic's model documentation page (previously only recorded as folder metadata, re-verified 2026-09-29).
- **Modalities:** Text and image input; text output. Vision, tool use, and adaptive thinking are documented for the family; an exact Mythos 5.1 modality table was not surfaced separately.
- **Pricing (as of 2026-09-29):** Starts at $10 per 1M input tokens and $50 per 1M output tokens, with $0.25 per 1M cache-read tokens (Anthropic model documentation, re-verified 2026-09-29). Default Mythos access requires accepting 30-day data retention for safety monitoring.
- **Architecture:** Proprietary; Anthropic has not disclosed parameter count.

### Raw benchmarks found

Agent / tool use:

- Artificial Analysis: **no verified public score found**. The Artificial Analysis model page for Mythos 5.1 returns 404 and the model does not appear in the Intelligence Index leaderboard, so no index, rank, speed, or cost-per-task value can be attributed to it (checked 2026-09-29).
- Terminal-Bench 4.0: **60.9%** with safeguards off, recorded in Anthropic's Mythos-labelled row. The number is explicitly an unconstrained/safeguards-off configuration and is not a plain default-settings score.
- Tau3-Banking / Tau2-Bench: **no verified public score found**
- GDPval-AA: **no verified public score found** as a standalone Mythos value
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Long-form virology end-to-end task scores: **0.81** (Task 1) and **0.87** (Task 2), from the Mythos-labelled rows in Anthropic's system card. These are dual-use biology capability probes, not general knowledge scores.
- Virology Capabilities Test (VCT) multimodal score: **0.58** against an expert baseline of 0.221 (Mythos-labelled row).
- GPQA Diamond, HLE, LCR/MLCR, and CritPt: **no verified public exact value found** for Mythos 5.1.
- Omniscience Accuracy / Hallucination Rate: **no verified public score found** (no Artificial Analysis coverage exists for this model).

Coding:

- Terminal-Bench 4.0: **60.9%** safeguards-off (shared with the agent/tool-use section).
- SWE-bench Verified / SWE-Pro, LiveCodeBench, SciCode / AA-SciCode, Vibe Code Bench, DeepSWE: **no verified public score found** for Mythos 5.1 specifically.

Long context:

- No public retrieval-at-length result for Mythos 5.1 was found. Anthropic's documentation verifies a 1M-token input window and 128K maximum output, but no Mythos-specific measured context retrieval score is published.

Sources consulted: [Anthropic Mythos page](https://www.anthropic.com/claude/mythos), [Anthropic models overview](https://platform.claude.com/docs/en/about-claude/models/overview), the Claude Fable 5 & Mythos 5 system card, and [Artificial Analysis models index](https://artificialanalysis.ai/models) (404 for this model), accessed 2026-09-29. Fable results are used only as explicitly labeled contextual evidence, never as Mythos measurements.

### Normalized scores (1–100)

- **Tool use: 90/100.** Held flat. Mythos is designed for advanced research and restricted cyber/biology programs; the new Mythos-labelled Terminal-Bench 4.0 row at 60.9% is a real measured agentic number, but it is a safeguards-off configuration and there is no independent index. Score remains provisional.
- **Reasoning: 90/100.** Held flat. The Mythos-labelled virology rows (0.81/0.87 long-form, 0.58 on VCT) show frontier dual-use biology reasoning, but no general-purpose public reasoning benchmark is published for the model.
- **Context window: 90/100.** Held flat. The 1M input / 128K output specification is now verified on Anthropic's own documentation rather than inferred from folder metadata, which removes the earlier evidence caveat; no retrieval-at-length result is published, so the score does not rise.
- **Multimodal: 75/100.** Held flat. Image input is documented for the family, and the VCT row is explicitly a multimodal evaluation scored at 0.58 against a 0.221 expert baseline, but no general visual or chart benchmark is published.
- **Coding: 85/100.** Held flat. The 60.9% Terminal-Bench 4.0 result is a strong terminal coding/agent number, but no SWE-bench, DeepSWE, or LiveCodeBench value exists for Mythos 5.1.
- **Cost efficiency: 30/100.** $10/$50 per 1M input/output is the most expensive tier in this comparison; the $0.25 cache-read price and access restrictions with a 30-day retention requirement still leave it far from cost-efficient.
- **Overall Score: 86.0/100.** (90 + 90 + 90 + 75 + 85) / 5 = 430 / 5 = 86.0. Best fit: vetted cybersecurity and life-sciences research with strict access controls. The re-run added the first Mythos-labelled measured rows and verified the context spec, but there is still no independent index for this model.

---

## Signature

- Provided by: **Space Bunny Alpha (opencode/space-bunny-free)** — 2026-09-29
- Method: Public web research of Anthropic's Mythos/Fable documentation and system card plus an Artificial Analysis index check (404, no listing); Fable figures are explicitly separated from Mythos-specific evidence. Scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
