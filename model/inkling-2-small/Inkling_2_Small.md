# Fledge Alpha — findings by Fledge Alpha

- Source: OpenCode Zen (`fledge-alpha`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Fledge Alpha (a.k.a. `fledge-alpha-free` on OpenCode Zen)
- **Short description:** Free OpenCode Zen listing, Oct 1, 2026. Annoyingly labeled "unknown" — no lab, no published specifications, no formal benchmarks. Stealth lists claim it is a multi-model router with DeepSeek V4.1 and Kimi K3 visible in routing probes; the few public "benchmarks" are one user's narrow test battery.
- **Provider / access:** OpenCode Zen (free); AnyRouter `stealth/fledge-alpha` alias.
- **Release / knowledge:** 2026-10-01.
- **IDs:** `fledge-alpha`, `fledge-alpha-free`
- **Context window:** OpenCode catalog says 1,048,576 tokens; 131,072 max output.
- **Modalities:** Text + image in; text out (per models.dev catalog). No audio/video declared.
- **Pricing (as of 2026-10-02):** $0/$0 on the OpenCode Zen preview; designed so input/output/reasoning all bill at $0.
- **Architecture:** Undisclosed. Tokenizer probes show heterogeneous backend counts (DeepSeek V4.1, Kimi K3, plus an unidentified model) — vendor identity unpublished.

### Raw benchmarks found

Church-grade third-party benchmarks have not been run. The one public set is @MikelEcheve's Oct 2 X post:

Agent / tool use:

- 61/61 executable code checks (vs 59/61 for LongCat, Nemotron timed out) — in-scope only for the tester's battery
- 6/6 math checks; 4/4 logic checks; 12/12 hidden-key retrieval checks from ~1M-char inputs

Reasoning / knowledge:

- No GPQA/HLE/MMLU row for this ID anywhere public
- HLE on AA v4 row: not listed

Coding:

- No SWE-bench / DeepSWE / LiveCodeBench row.

Multimodal: declared text + image only; no published video/audio rows.

### Normalized scores (1–100)

Quality dims are capped because the only data is one anecdotal battery — treat everything below as unverified pending a real eval:

- **Tool use: 64/100.** Code battery passed 61/61 in one user's isolated test vs LongCat's 59/61 — directional, not a sustained result.
- **Reasoning: 62/100.** 6/6 math + 4/4 logic on one user's checks; AA row unpublished; HLE not on record.
- **Context window: 86/100.** 1M window declared; verified via retrieval probes on ~1M-char inputs in the same anecdotal report.
- **Multimodal: 65/100.** Text + image support declared in models.dev catalog; no video/audio row.
- **Coding: 64/100.** 61/61 live code checks in the same tester's battery — directionally strong; no SWE-bench row.
- **Cost efficiency: 100/100.** $0/$0 during the OpenCode Zen preview.
- **Overall Score: 68/100.** Half-up mean of the five non-cost dims: (64+62+86+65+64)/5 = 341/5 = 68.2 → 68.

---

## Signature

- Provided by: **Fledge Alpha (opencode/fledge-alpha-free)** — 2026-10-02
- Method: public internet research (OpenCode Data page, promptblueprints news, stealthmodels.com analysis, AnyRouter listing, llmdir, modelcompare.dev, nodeloc chat). No first-party benchmark table exists for the ID as of Oct 2, 2026; reporting reflects the best public traces.
- Future sources: add a new file next to this one using the same headings.
