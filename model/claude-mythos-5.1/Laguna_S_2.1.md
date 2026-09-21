# Claude Mythos 5.1 — findings by Laguna S 2.1

> Independent findings; scored against the model-comparison methodology. Overview + scoring methodology: `../../model-comparison.md` · Signed cross-model log: `../../model-findings.md`
>
> - Source: Anthropic (`anthropic/claude-mythos-5-1`)
> - Date: 2026-09-20 (UTC)
> - Overview and scoring methodology: `../../model-comparison.md`
> - Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1 (restricted-access Mythos-class configuration)
- **Short description:** Anthropic's Mythos-class variant of Claude Fable 5.1 with cybersecurity, biology/chemistry and distillation safeguards relaxed for vetted Project Glasswing partners; same underlying weights as Fable 5.1.
- **Provider / access:** Anthropic API (`claude-mythos-5-1`), AWS Bedrock, Google Vertex AI; Messages/Responses API. Access is gated to vetted Project Glasswing cybersecurity and critical-infrastructure partners plus an incoming biomedical trusted-access program — not self-serve.
- **Release / knowledge:** Released June 9, 2026 (June 12 export-control suspension, restored July 1, 2026); Mythos 5.1 variant announced September 1–2, 2026. Knowledge cutoff not disclosed.
- **IDs:** `anthropic/claude-mythos-5-1`
- **Context window:** 1,048,576 (1M) in / 128,000 out
- **Modalities:** Text, image, pdf, tool-calls in; text, tool-calls out (no audio/video)
- **Pricing (as of 2026-09-20):** $10 in / $50 out per 1M tokens; cached read $0.25/M (75% cut vs Fable 5), cache write $12.50/M; Batch API 50% discount. Paid only, no Free tier.
- **Architecture:** Proprietary; same weights as Claude Fable 5.1, parameters and architecture not disclosed.

### Raw benchmarks found

> Mythos 5.1 shares Claude Fable 5.1's underlying weights (HokAI, explainx.ai), so Fable 5.1's disclosed scores apply to the Mythos-class configuration on general, non-safeguard-limited benchmarks; Mythos adds unrestricted cybersecurity capability, for which no public ExploitBench-style isolation score is published.

Agent / tool use:

- Terminal-Bench 2.1: **85.0%** (vendor-reported, Anthropic/HokAI Fable 5.1; Mythos shares Fable 5.1 weights)
- Terminal-Bench v4.0: **55.8%** (vendor-reported, Anthropic/HokAI Fable 5.1, Sep 2026)
- Terminal-Bench-Science 0.1: **52.6%** (vendor-reported, Anthropic/HokAI; rises from Fable 5's 24.7%)
- SWE-bench Pro: **80.3%** (vendor-reported, HokAI "Mythos matches Fable 5"; Fable 5.1 cites 81.2%)
- OSWorld 2.0 Partial: **77.9%** (vendor-reported, HokAI Fable 5.1)
- Legal Research Bench: **55.29%** (vendor-reported, HokAI Fable 5.1)
- Harveys Legal Agent Benchmark: **6.67%** (vendor-reported, HokAI Fable 5.1 — weakest disclosed result)
- Humanity's Last Exam With Tools: **65** (vendor-reported, HokAI Fable 5.1)
- GDPval-AA / Tau3-Bench / Tau2-Bench: no verified public score found
- Claw-Eval / ClawProBench: no verified public score found
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: no verified public score found

Reasoning / knowledge:

- MMLU Pro: **92.38%** (vendor-reported, HokAI Fable 5.1; Mythos matches)
- GPQA Diamond: no verified public score found (Mythos/Fable 5.1 did not re-disclose vs Fable 5's prior figure)
- HLE: no verified public score found
- AA Intelligence Index: **66** (Artificial Analysis, cited HokAI, Sep 2026)
- Vals Index: **67.87%** (#1 of 51 evaluated, HokAI Fable 5.1)
- BenchLM overall: no verified public score found
- LCR / MLCR: no verified public score found
- CritPt: no verified public score found
- Omniscience / Hallucination Rate: no verified public score found

Coding:

- SWE-bench Verified: **95.0%** (vendor-reported, HokAI Mythos page, rank 3 of 29 vs 78.5% median)
- LiveCodeBench: **90.52%** (vendor-reported, HokAI Fable 5.1; Mythos shares weights)
- MMMU Pro: **90.64%** (vendor-reported, HokAI Fable 5.1)
- Humanity's Last Exam: **60.9%** (vendor-reported, HokAI Fable 5.1)
- DeepSWE / SciCode / Vibe Code Bench: no verified public score found for Mythos 5.1

Long context:

- MRCR / RULER / GDM-MRCR: no verified public score found (1M window asserted by HokAI)

### Normalized scores (1–100)

- **Tool use: 85/100.** Terminal-Bench 2.1 85.0% (leads GPT-5.6 Terra 87.4%-era peers) and SWE-bench Pro 80.3%, but GDPval-AA/Tau3-Bench not disclosed, capping the agentic-work score.
- **Reasoning: 91/100.** MMLU Pro 92.38%, Vals Index 67.87% (rank #1/51) and AA Intelligence Index 66; capped by GPQA/HLE not re-disclosed for 5.1.
- **Context window: 95/100.** 1M-token input window (top tier).
- **Multimodal: 75/100.** Image/pdf input and tool-calls, but no native audio/video.
- **Coding: 92/100.** SWE-bench Verified 95.0% (rank 3/29) and LiveCodeBench 90.52%; uncapped SWE-bench Verified number absent for SWE-bench Verified.
- **Cost efficiency: 30/100.** Premium paid tier ($10/$50 per 1M), no Free tier.
- **Overall Score: 88/100.** Mean of the five quality dimensions; strong SOTA coding/reasoning at restricted-access pricing.

---

## Signature

- Provided by: **Laguna S 2.1 (poolside/laguna-s-2.1)** — 2026-09-20
- Method: Independent public web research (HokAI, explainx.ai, vendor model cards); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.

---
