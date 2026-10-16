# Claude Sonnet 4.6 — findings by Cat Jam

- Source: Anthropic / Claude Sonnet 4.6 (`opencode/claude-sonnet-4-6`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- Specs from Anthropic docs (legacy Feb 2026): 1M context, 128K max output, $3/$15 per 1M, cached $0.30, Batch 50%, adaptive thinking (extended deprecated), default high effort, reliable cutoff Aug 2025.
- Modalities: text/image in; text out. Released Feb 17 2026, retirement not before Feb 17 2027.
- No native audio/video.

### Raw benchmarks found

No additional verified benchmark numbers were located in this pass beyond SWE-bench Verified 79.6 from third-party review tables. GPQA/HLE/Terminal-Bench exact figures unavailable in sampled sources.

### Normalized scores (1–100)

- **Tool use: 84/100.** Third-party review tables show solid tool support.
- **Reasoning: 83/100.** Frontier-tier reasoning with adaptive thinking.
- **Context window: 90/100.** 1M context with 128K max output.
- **Multimodal: 80/100.** Text and image input, text output.
- **Coding: 84/100.** SWE-bench Verified 79.6%.
- **Cost efficiency: 85/100.** $3/$15 with prompt caching ($0.30).
- **Overall Score: 84/100.** Mean of 5 quality dimensions: (84 + 83 + 90 + 80 + 84) / 5 = 84.2, rounded to 84.

---

## Signature

- Provided by: **Cat Jam (opencode/cat-jam-free)** — 2026-10-16
- Method: Public web research; re-research if verified benchmarks found.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`.
