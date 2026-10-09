# Claude Fable 5 — findings by DeepSeek 4.1 Flash

- Source: Anthropic / Claude Fable 5 (`claude-fable-5`)
- Date: 2026-10-09 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Fable 5
- **Short description:** Anthropic's first broadly available **Mythos-class** model (a tier above Opus), released 2026-06-09 — same underlying weights as the restricted Claude Mythos 5, wrapped in production safeguards that fall back to Claude Opus 4.8 for cybersecurity, biology/chemistry and distillation requests. Built for long-horizon agentic coding and knowledge work. Superseded by Claude Fable 5.1 (Sep 2026); not the same model as the 5.1 folder.
- **Provider / access:** Anthropic Claude API (`claude-fable-5`), Claude apps, and third-party (DeepInfra). Messages/Chat API, extended thinking, batch + prompt caching. OpenCode Zen tracks `opencode/claude-fable-5`.
- **Release / knowledge:** 2026-06-09 (access briefly suspended 2026-06-12, redeployed 2026-07-01); knowledge cutoff not separately published.
- **IDs:** `anthropic/claude-fable-5` (API id `claude-fable-5`); `opencode/claude-fable-5`. No Zen Free ID.
- **Context window:** 1,000,000 input tokens / 128,000 max output (Anthropic docs + LLM Stats provider table).
- **Modalities:** text + image in; text out. Reasoning (extended thinking) yes; tool calls; prompt caching; vision.
- **Pricing (as of 2026-10-09):** **$10.00 / $50.00 per 1M** in/out; cached input **$1.00/1M** (90% off). Paid only (no Free ID); Mythos-class traffic carries a 30-day data-retention policy.
- **Architecture:** proprietary Mythos-class; weights not released.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 3.0: **34.0%** (FrontierBench, via BenchLM)
- Terminal-Bench 2.1: **84.3%** (Anthropic system card, via BenchLM; 80.5% Vals AI) — 20.9% of trials hit a safeguard fallback to Opus 4.8, so this is already the effective figure
- OSWorld-Verified: **85%** (Anthropic system card)
- Tau2-Bench: **98.5%** (Artificial Analysis)
- GDPval-AA: **1932 Elo** (LLM Stats review, self-reported) / **1747** (BenchLM system-card figure); GDPval-AA normalized 55.6% (AA)
- AA Agentic Index 51.0%; AA EnterpriseOps-Gym 51.1%; AA Harvey LAB v1.0 93.6%; Terminal-Bench Hard 62.9%; ApprenticeBench 34% (NeoCognition)

Reasoning / knowledge:

- GPQA Diamond: **92.6%** (AA) / 93.2% (Vals)
- HLE: **55.5%** (with tools, AA)
- AA-LCR **82.3%**; MLCR-AA 64.4%; CritPt 28.6%
- ARC-AGI-1 **98.5%**; ARC-AGI-2 **89.2%** (ARC Prize verified)
- Artificial Analysis Intelligence Index: **49.6%** (partial coverage note)
- AA-Omniscience Accuracy 65.4% / Hallucination Rate 63.6%
- MMLU-Pro 91.5% (Vals); IFBench 63.5%; Blueprint-Bench 2 38.6%; OfficeQA Pro 57.9%

Coding:

- SWE-bench Verified: **95%** (Anthropic system card)
- SWE-bench Pro: **80%** (+10.8 over Opus 4.8)
- LiveCodeBench: **89.8%** (Vals); AA-SciCode 61.0%; AA Coding Index 76.5%
- FrontierSWE v2 47.0%; FrontierCode 1.1 Main 53.5% (Diamond ~46.3%, #1 among frontier models); cursorBench 3.1 70.6% / 3.2 70.5%; VulcanBench v3 89.5%

Long context:

- 1M-token window; Anthropic claims sustained long-horizon memory (Slay the Spire file-memory test), but **no MRCR/RULER/GraphWalks retrieval score published — no verified public score found**.

### Normalized scores (1–100)

- **Tool use: 92/100.** Tau2 98.5%, OSWorld-Verified 85%, GDPval-AA 1932 Elo and TB 2.1 84.3% are frontier-class; capped by the 20.9% safeguard fallback rate on agentic trials and the low Terminal-Bench 3.0 (34%).
- **Reasoning: 92/100.** ARC-AGI-2 89.2%, GPQA 92.6% and HLE 55.5% are top-tier; AA Intelligence Index 49.6% (partial coverage) and a 63.6% omniscience hallucination rate keep it short of the very top.
- **Context window: 95/100.** 1M-token input (≥1M band) with 128K output; no ≥98%-at-512K retrieval benchmark published, so held at 95.
- **Multimodal: 75/100.** Text + image in, text out (image band); state-of-the-art vision claims (screenshot→code, Pokémon FireRed with vision-only harness) but no audio/video.
- **Coding: 94/100.** SWE-bench Verified 95%, SWE-bench Pro 80%, LiveCodeBench 89.8% and #1 FrontierCode are frontier; capped only by SWE Verify saturation.
- **Cost efficiency: 38/100.** $10/$50 per 1M is 2× Opus 4.8 and frontier-premium; the $1 cached read is the only value lever.
- **Overall Score: 90/100.** (92 + 92 + 95 + 75 + 94) / 5 = 89.6 → 90. Best fit: long-horizon agentic coding and dense knowledge work outside the safeguarded cyber/bio/chem domains.

---

## Signature

- Provided by: **DeepSeek 4.1 Flash (deepseek/deepseek-v4.1-flash)** — 2026-10-09
- Method: public internet research, cross-checked across BenchLM, LLM Stats (model page + review), the Anthropic launch post and system-card citations, Artificial Analysis, ARC Prize and Vals AI. Scores are normalized 1–100 interpretations, not official vendor scores; GDPval-AA discrepancies between sources are reported rather than averaged blindly.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
