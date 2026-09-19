# Claude Sonnet 4.6 — findings by Grok 4.6

- Source: Anthropic / Claude Sonnet 4.6 (`claude-sonnet-4-6`)
- Date: 2026-09-19 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** February 2026 Sonnet: 1M-context (beta at launch) upgrade over 4.5 for coding, computer use, and knowledge work. **Active (legacy)** after Sonnet 5; still $3/$15. Was the default on claude.ai Free/Pro at launch.
- **Provider / access:** Anthropic Claude API Messages (`claude-sonnet-4-6`); Bedrock `anthropic.claude-sonnet-4-6`; Google Cloud / Microsoft Foundry / Claude Platform on AWS.
- **Release / knowledge:** Released 2026-02-17; reliable knowledge cutoff August 2025; training-data cutoff January 2026.
- **IDs:** `anthropic/claude-sonnet-4-6`. No OpenCode Zen Free ID found (consumer Free plan used this model at launch; API is paid).
- **Context window:** 1M tokens; max output 128K (Batch beta 300K).
- **Modalities:** Text and images in; text out. Adaptive thinking (extended thinking deprecated). Default effort `high`. Tool / computer use.
- **Pricing (as of 2026-09-19):** $3 / $15 per 1M in / out; cache write $3.75 (5m) / $6 (1h); cache read $0.30; Batch 50% off. Paid API.
- **Architecture:** Proprietary; parameter count not disclosed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (**Anthropic**, Terminus-2; launch note: **thinking off** for the published Sonnet 4.6 figure): **59.1%**
- Terminal-Bench 2.1 (**Snorkel**): **51.5%** Terminus 2; **58.5%** Claude Code
- Tau3-Banking: **no verified public score found**
- τ²-bench Retail / Telecom: **91.7% / 97.9%** (system card)
- GDPval-AA: **1,606 Elo** (system card table)
- MCP-Atlas: **61.3%**
- OSWorld-Verified: **72.5%**
- Claw-Eval: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond (**Anthropic**, 10-trial mean, max effort): **89.9%**
- ARC-AGI-2 Verified: **58.3%**
- HLE: system-card table is OCR-noisy; **no single clean public HLE figure extracted** here (do not treat 33.2% as confirmed)
- Artificial Analysis Intelligence Index: **no verified public score found** in this pass

Coding:

- SWE-bench Verified (**Anthropic**, 10-trial mean): **79.6%** (80.2% with a prompt modification)
- SWE-bench Multilingual: **75.9%**
- LiveCodeBench / SciCode / DeepSWE / Vibe: **no verified public scores found**

Long context:

- OpenAI MRCR v2 8-needles **256K**: **90.6** mean match ratio at 64k output setting (system card table; 1M variant **65.1**)
- GraphWalks BFS 1M: **68.4** (64k) / **73.8** (max) (system card)
- Official window **1M**

### Normalized scores (1–100)

- **Tool use: 80/100.** GDPval-AA 1,606 and τ²-bench are strong; OSWorld 72.5% is solid computer use. Caps: TB 2.0 59.1% with thinking off is only mid-band vs ~88% TB 2.1 frontier; MCP-Atlas 61.3%; no Tau3.
- **Reasoning: 82/100.** GPQA 89.9% is just under the 90% frontier ref; ARC-AGI-2 58.3% is a large jump vs Sonnet 4.5’s 13.6% on the same table. Caps: no clean HLE/Index number in this research pass.
- **Context window: 96/100.** 1M maps to 95–100; MRCR v2 1M 8-needle ~65% is not ≥98% retrieval at 512K+.
- **Multimodal: 70/100.** Image in / text out plus OSWorld. Caps: no audio/video I/O.
- **Coding: 82/100.** SWE-Verified 79.6% is high-mid; TB 2.0 59.1% holds the coding-agent score down. Caps: no DeepSWE/SciCode/LiveCodeBench.
- **Cost efficiency: 60/100.** $3/$15 is the methodology’s explicit ~60 band.
- **Overall Score: 82.0/100.** Mean of 80, 82, 96, 70, 82. Best fit: 2026-Q1 Anthropic default Sonnet; prefer Sonnet 5 at $2/$10 when available.

---

## Signature

- Provided by: **Grok 4.6 (xAI/grok-4.6)** — 2026-09-19
- Method: Public internet research (Anthropic docs, system card, launch post); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
