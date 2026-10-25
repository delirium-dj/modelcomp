# Fledge Alpha — findings by Muse Glimmer 30B

- Source: Unknown / OpenCode Zen `fledge-alpha-free`
- Date: 2026-10-25 (UTC)
- Overview and scoring methodology: ../../model-comparison.md
- Cross-model signed log: ../../model-findings.md

## Model card

- **Name:** Fledge Alpha
- **Short description:** Free OpenCode Zen stealth preview that appeared 2026-10-01 with no published lab/developer. Listed as a 1M-context multimodal model with tool calling and three reasoning efforts; identity remains unknown and the preview was removed 2026-10-11. Hypothesis: a router-backed service with changing backends.
- **Provider / access:** OpenCode Zen `opencode/fledge-alpha-free` (free preview, discontinued 2026-10-11); AnyRouter alias `stealth/fledge-alpha`. Chat Completions API. No confirmed OpenRouter / Nous route.
- **Release / knowledge:** First listed 2026-10-01; first captured specifications 2026-10-02. Knowledge cutoff not disclosed.
- **IDs:** `unknown/fledge-alpha`, `opencode/fledge-alpha-free`, `stealth/fledge-alpha`
- **Context window:** 1,048,576 tokens total; 131,072-token max output. Listed in models.dev catalog 2026-10-02 and AnyRouter release 2026-10-02. Verified by catalog entry, not by independent long-context retrieval harness.
- **Modalities:** Input text, image; Output text. Reasoning effort low / high / max reported. Tool calls supported. JSON mode not verified.
- **Pricing (as of 2026-10-25):** $0 input / $0 output during the OpenCode Zen preview 2026-10-01 to 2026-10-11. Preview discontinued; no working public replacement endpoint verified as of 2026-10-11. Data-usage terms unknown.
- **Architecture:** Proprietary/unknown. Tokenizer probe variance and uneven SVG outputs reported by Stealth Models suggest a router with heterogeneous backends. No open-weights license disclosed.

### Raw benchmarks found

> Sources: Stealth Models research 2026-10-02, AnyRouter release 2026-10-02, Prompt Blueprints article 2026-10-02, OpenCode Data page 2026-10-19. No official model card or vendor benchmark table was published.

Agent / tool use:

- Terminal-Bench 2.1: no verified public score found
- Tau3-Banking / Tau2-Bench: no verified public score found
- GDPval-AA: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found
- Anecdotal user test @MikelEcheve 2026-10-02: 61/61 executable code checks reported; not a standardized harness and results conflict with the “no benchmarks published” position of AnyRouter and Prompt Blueprints.

Reasoning / knowledge:

- GPQA Diamond: **92.3%** accuracy 36/39, 95% CI 79.7–97.3% — Stealth Models research 2026-10-03
- HLE: **25.4%** accuracy 17/67, 95% CI 16.5–36.9% — Stealth Models research 2026-10-03 (table shows 25.8% 17/66 for shared set)
- MMLU-Pro: **92.0%** accuracy 92/100, 95% CI 85.0–95.9% — Stealth Models research 2026-10-03
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

- Stealth Models reports hidden-key retrieval from inputs of up to ~1M characters in anecdotal testing; no MRCR / RULER / GraphWalks published score. Catalog claims 1,048,576 tokens but independent retrieval measurement not published.

### Normalized scores (1–100)

- **Tool use: 45/100.** No verified public Terminal-Bench / Tau3 / GDPval scores exist. Anecdotal 61/61 code checks and tool-call support in catalog provide a directional signal but are not standardized and conflict with statements that no benchmarks are published. Score capped by lack of independent harness data.
- **Reasoning: 76/100.** GPQA Diamond 92.3% and MMLU-Pro 92.0% indicate strong graduate science and broad knowledge performance in Stealth Models' independent evaluation. HLE 25.4% is moderate and pulls the score down; no Artificial Analysis Index or CritPt numbers exist for verification. Conflicting source positions: Stealth Models publishes numbers while AnyRouter / Prompt Blueprints state no benchmarks are published.
- **Context window: 95/100.** 1,048,576-token window listed in models.dev catalog and AnyRouter release. No independent RULER / GraphWalks retrieval score published, and OpenCode Data shows average session tokens 2.3M, suggesting use at scale but not verification of retrieval quality. Score reflects declared tier per methodology.
- **Multimodal: 65/100.** Catalog lists text + image input, text output. No video/audio input reported and no published multimodal benchmark numbers. Methodology maps text+image to 60-70.
- **Coding: 45/100.** No verified public SWE-bench / LiveCodeBench / SciCode scores. Anecdotal code checks are user-reported and not reproduced. Score reflects the absence of standardized evidence and caps coding.
- **Cost efficiency: 100/100.** $0/$0 during the active OpenCode Zen preview. Preview ended 2026-10-11 and no public replacement endpoint is verified, so cost efficiency is historical.
- **Overall Score: 65/100.** Mean of five quality dims (Tool 45 + Reasoning 76 + Context 95 + Multimodal 65 + Coding 45) / 5 = 65.2 → 65. Best-fit recommendation: unidentified stealth preview with strong anecdotal reasoning signals and large declared context, but lacking verified tool / coding benchmarks and now unavailable.

---

## Signature

- Provided by: **Muse Glimmer 30B (meta/muse-glimmer-30b)** — 2026-10-25
- Method: public internet research; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

---
