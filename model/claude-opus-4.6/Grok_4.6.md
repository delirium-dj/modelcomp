# Claude Opus 4.6 — findings by Grok 4.6

- Source: Anthropic / Claude Opus 4.6 (`claude-opus-4-6`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** February 2026 Opus: first Opus-class 1M-context model, adaptive thinking, stronger long-horizon coding than 4.5. Now **Active (legacy)** behind Opus 4.8 / Opus 5 at the same $5/$25 list price.
- **Provider / access:** Anthropic Claude API Messages (`claude-opus-4-6`); Bedrock InvokeModel `anthropic.claude-opus-4-6-v1`; Google Cloud / Microsoft Foundry / Claude Platform on AWS.
- **Release / knowledge:** Released 2026-02-05; reliable knowledge cutoff May 2025; training-data cutoff August 2025 (Anthropic overview).
- **IDs:** `anthropic/claude-opus-4-6`. No OpenCode Zen Free ID found.
- **Context window:** 1M tokens; max output 128K (Batch beta 300K). Launch originally billed >200k prompts at a premium on the Claude Platform; current docs bill the full 1M at standard rates for 4.6+ models.
- **Modalities:** Text and images in; text out. Adaptive thinking (extended thinking deprecated). Default effort `high`. Tool / computer use.
- **Pricing (as of 2026-09-19):** $5 / $25 per 1M in / out; cache write $6.25 (5m) / $10 (1h); cache read $0.50; Batch 50% off. US-only inference 1.1×. Paid only.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (**Anthropic system card**, Terminus-2): **65.4%**
- Terminal-Bench 2.1 (**Snorkel / public leaderboard**): **63.8%** Terminus 2; **70.1%** Claude Code
- Tau3-Banking: **no verified public score found**
- τ²-bench Retail / Telecom (**system card**): **91.9% / 99.3%**
- GDPval-AA: Anthropic: **+144 Elo vs GPT-5.2**, **+190 vs Opus 4.5** (absolute **~1,619** on third-party recaps of the AA run)
- MCP-Atlas: **59.5%** (system card)
- OSWorld-Verified: **72.7%** (system card)
- BrowseComp: Anthropic claims SOTA; multi-agent harness **86.8%** (launch footnotes)
- Claw-Eval: **70.4%** (BenchmarkList aggregator — treat as secondary)

Reasoning / knowledge:

- GPQA Diamond (**Anthropic**): **91.3%**; **Artificial Analysis** **89.6%** (max, observed 2026-09)
- HLE with tools (**Anthropic**, revised 2026-02-23): **53.0%**
- ARC-AGI-2 Verified: **68.8%** (system card)
- Artificial Analysis Intelligence Index: **31.9** on later **v4.3** (AI Atlas, obs. 2026-09-15) — launch-era Index **no verified public number found** in the pages retrieved
- MMMU-Pro: **73.7%** no tools / **77.3%** with tools (system card table; OCR of “73” is slightly noisy)

Coding:

- SWE-bench Verified (**Anthropic**, 25-trial mean): **80.84%** (81.42% with a prompt modification)
- SWE-bench Multilingual: **77.83%**
- SWE-bench Verified public board (mini-SWE-agent): **75.6%** (AI Atlas, 2026-02-17)
- LiveCodeBench: **88.8%** (BenchmarkList aggregator)
- SciCode: **51.9%** (BenchmarkList aggregator)
- Vibe Code Bench v1.1: **57.6%** (BenchmarkList aggregator)
- DeepSWE: **no verified public score found**

Long context:

- Official **1M** (beta at launch). **no MRCR / RULER / GraphWalks** figure found (Anthropic cites an independent AA needle-style eval without a public numeric in the launch body).

### Normalized scores (1–100)

- **Tool use: 84/100.** τ²-bench is near-ceiling; GDPval-AA led the Feb 2026 field; TB 2.0 65.4% is above mid but below the ~88% TB 2.1 frontier ref. Caps: MCP-Atlas 59.5%; no Tau3-Banking; TB 2.1 63.8–70.1% depending on harness.
- **Reasoning: 86/100.** GPQA 91.3% and HLE-with-tools 53.0% meet frontier refs. Caps: later AA Index v4.3 at 31.9; AA GPQA 89.6% slightly below vendor.
- **Context window: 97/100.** Official 1M maps to 95–100; no public ≥98% retrieval at 512K+.
- **Multimodal: 70/100.** Image in / text out plus OSWorld and MMMU-Pro. Caps: no audio/video I/O.
- **Coding: 85/100.** SWE-Verified 80.8% (25-trial) is strong for Feb 2026; SciCode ~52% is around the 55% frontier line. Caps: public mini-SWE-agent board 75.6%; no DeepSWE.
- **Cost efficiency: 50/100.** Same $5/$25 band as later Opus models (~60 at $3/$15, ~30 at $10/$50).
- **Overall Score: 84.4/100.** Mean of 84, 86, 97, 70, 85. Best fit: early-2026 1M-context Opus for coding/agents; prefer 4.8/5 at the same list price when available.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: Public internet research (Anthropic docs/system card, Artificial Analysis aggregators, Snorkel TB 2.1); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
