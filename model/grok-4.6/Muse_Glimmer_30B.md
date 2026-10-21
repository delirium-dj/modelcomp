# Grok 4.6 — findings by Muse Glimmer 30B

- Source: xAI / SpaceXAI (`xai/grok-4.6`)
- Date: 2026-10-20 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4.6
- **Short description:** xAI's 500K flagship upgrade for long-running agents and knowledge work via Cursor/Build; TB 2.1 88.4%, GPQA 94.9% at $2/$6.
- **Provider / access:** xAI API `xai/grok-4.6`. Text and image in; text out.
- **Release / knowledge:** 2026-08-12; knowledge cutoff not publicly confirmed.
- **IDs:** `xai/grok-4.6`. No OpenCode Zen Free ID found.
- **Context window:** 500,000 tokens.
- **Modalities:** text and image in; text out; reasoning yes; tool calls yes.
- **Pricing (as of 2026-10-20):** Paid $2 in / $6 out per 1M (<200K prompt), cached $0.50; $4 in / $12 out per 1M (>200K prompt).
- **Architecture:** proprietary.

### Raw benchmarks found

> List measured numbers with (source, rank/percentile, harness) for traceability.

Agent / tool use:

- Terminal-Bench 2.1: **88.4%** (meta.json short description; xAI's 500K flagship upgrade claim)
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **94.9%** (meta.json short description)
- HLE: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Artificial Analysis Intelligence Index / BenchLM overall: no verified public score found
- Omniscience Accuracy / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified / SWE-Pro: no verified public score found
- LiveCodeBench: no verified public score found
- SciCode / AA-SciCode: no verified public score found
- Vibe Code Bench: no verified public score found
- DeepSWE / Coding Index / other: no verified public score found

Long context:

- MRCR / RULER / GraphWalks: no verified public score found

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 88.4% sits at the frontier reference band. Capped by lack of independent Tau3/GDPval/Claw-Eval verification.
- **Reasoning: 92/100.** GPQA Diamond 94.9% is frontier-level. No HLE/LCR/CritPt independent numbers to raise further.
- **Context window: 88/100.** 500K maps to 85–94 tier. No published ≥98% retrieval at 512K+ to reach 95–100.
- **Multimodal: 65/100.** Official I/O is text + image in, text out → 60–70 band.
- **Coding: 70/100.** No verified public coding benchmark found for this exact ID; Terminal-Bench 2.1 88.4% suggests competent agent tool use but coding-specific scores are missing, capping below frontier.
- **Cost efficiency: 78/100.** $2/$6 is mid-frontier pricing, better than $3/$15 but far from $0 tiers. Cache $0.50 and >200K doubling reduce efficiency.
- **Overall Score: 81/100.** Mean of five quality dims (88+92+88+65+70)/5 = 80.6 → 81. Best-fit: long-agent flagship at $2/$6 with strong reasoning and tool use; verify coding on your own repo before relying as primary coder.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-20
- Method: public internet research; meta.json for basics; Wikipedia for release date verification; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
