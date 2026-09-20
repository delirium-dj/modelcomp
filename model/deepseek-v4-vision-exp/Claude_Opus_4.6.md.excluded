# DeepSeek V4 Vision Exp — findings by Claude Opus 4.6

- Source: DeepSeek / DeepSeek-V4-Flash-Vision-Exp (legacy, retired)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Flash Vision Exp
- **Short description:** DeepSeek's experimental vision-capable Flash variant. Now retired and replaced by DeepSeek-V4.1-Flash which includes native multimodal support. Legacy alias still accepted for backward compatibility.
- **Provider / access:** DeepSeek API (aliases route to V4.1-Flash). Chat Completions API.
- **Release / knowledge:** Pre-September 2026 experimental release; retired September 10, 2026. Knowledge cutoff not explicitly published.
- **IDs:** `deepseek/deepseek-v4-flash-vision-exp` (legacy, routes to V4.1-Flash)
- **Context window:** ~1,000,000 tokens (1M, as routed to V4.1-Flash). Original experimental context may have been smaller.
- **Modalities:** Text, image in; text out. Experimental vision capabilities; now superseded by V4.1-Flash native vision.
- **Pricing (as of 2026-09-19):** Billed at V4.1-Flash rates: Off-peak $0.15/$0.60. Peak $0.30/$1.20. Images tokenized (384 tokens/image cap) at text input rates.
- **Architecture:** DeepSeek MoE with experimental vision encoder; specifics not fully disclosed for this variant.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench: no verified public score found for Vision Exp specifically
- GDPval-AA: no verified public score found
- Tau3-Banking: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no verified public score found
- HLE: no verified public score found
- LCR / MLCR: no verified public score found

Coding:

- SWE-bench: no verified public standalone score found
- DeepSWE: no verified public score found
- LiveCodeBench: no verified public score found

Long context:

- Context window inherited from V4.1-Flash (1M); no MRCR/RULER retrieval published.

### Normalized scores (1–100)

- **Tool use: 70/100.** No explicit benchmarks for this variant. Being a legacy experimental version, performance likely below V4.1-Flash. Conservative mid-range based on DeepSeek family.
- **Reasoning: 70/100.** No explicit benchmarks. Experimental variant without verified reasoning data. Conservative score based on Flash family positioning.
- **Context window: 85/100.** Experimental variant; original context may have been limited. Now routes to V4.1-Flash 1M. Slight cap for uncertainty.
- **Multimodal: 65/100.** Text + image in; text out. Experimental vision. No video/audio. Text+image = 60–70 range.
- **Coding: 72/100.** No explicit coding benchmarks for this variant. Flash family is strong at coding but this was experimental. Below V4.1-Flash performance.
- **Cost efficiency: 97/100.** Billed at V4.1-Flash rates which are very affordable. Off-peak $0.15/$0.60.
- **Overall Score: 72/100.** Mean of (70 + 70 + 85 + 65 + 72) / 5 = 72.4 ≈ 72. Legacy experimental model; users should use V4.1-Flash instead for better performance.

---

## Signature

- Provided by: **Claude Opus 4.6 (anthropic/claude-opus-4-6-20260205)** — 2026-09-19
- Method: Public internet research (DeepSeek docs, community reports); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
