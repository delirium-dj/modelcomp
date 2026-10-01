# Kimi K2.6 — findings by Grok 4.6

- Source: Moonshot AI (`kimi-k2.6` / `kimi-k2-6`)
- Date: 2026-10-01 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K2.6
- **Short description:** Moonshot AI open-weight 1T MoE (32B active) agentic model, 2026-04-21: K2.5 architecture with stronger coding/agents and larger agent swarms (up to 300 sub-agents / 4,000 steps). Predecessor to Kimi K3; not the 1M-context K3.
- **Provider / access:** Moonshot Platform, OpenRouter, Hugging Face, Cloudflare Workers AI. OpenAI- and Anthropic-compatible APIs; Thinking vs Instant modes (DeepInfra).
- **Release / knowledge:** 2026-04-21 (DocsBot). Knowledge cutoff unknown on that card.
- **IDs:** `moonshotai/kimi-k2.6` / `kimi-k2-6`. Weights: Modified MIT (DeepInfra). No OpenCode Zen Free ID found.
- **Context window:** **262,144** tokens (Moonshot / benchr / DeepInfra); BenchLM lists 256K. Max output **98K** (DocsBot).
- **Modalities:** DocsBot describes a “native multimodal agentic” model (vision implied); exact audio/video I/O not verified on Moonshot’s pricing card in this pass. Tool/function calling and JSON mode: yes (DeepInfra).
- **Pricing (as of 2026-10-01):** Moonshot list **$0.95 / $4.00** per 1M in/out (benchr, DocsBot). DeepInfra FP4 example $0.75/$3.50 with $0.15 cache — provider-specific, not the Moonshot list used for scoring.
- **Architecture:** 1T MoE / 32B active, open weights, Modified MIT.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0: **66.7%** (DeepInfra; up from K2.5 50.8%)
- Toolathlon: **50.0%** (DeepInfra; up from 27.8%)
- BrowseComp (Agent Swarm): **86.3%** (DeepInfra)
- Tau3 / Tau2 / GDPval-AA / Claw-Eval / TB 4.0: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **90.5%** thinking (DocsBot / benchr / BenchLM); AA-GPQA Diamond **91.1%**; Vals **89.1%** (BenchLM)
- HLE: **34.7%** (BenchLM); AA-HLE **37.5%**; HLE-Full **with tools 54.0%** (DeepInfra)
- Artificial Analysis Intelligence Index: **44.2** (DocsBot, Index v4.1.1 max effort) vs **27.0** (BenchLM — likely a later Index revision). Do not average; cite both.
- AA-Omniscience Index **5.3**; Accuracy **32.6%**; Hallucination **40.5%** (BenchLM)
- AIME 2026: **96.4%**; HMMT 2026: **92.7%** (DeepInfra)

Coding:

- SWE-bench Verified: **80.2%** thinking (Moonshot / BenchLM); Vals SWE-bench **76.2%**
- SWE-bench Pro: **58.6%** thinking (DeepInfra / BenchLM)
- SWE Multilingual: **76.7%** (DocsBot / BenchLM)
- LiveCodeBench v6: **89.6%** (DeepInfra / BenchLM); Vals LiveCodeBench **86.8%**
- SciCode: **52.2%**; AA-SciCode **51.5%**; AA Coding Index **61.8%** (BenchLM)
- Vibe Code Bench: **37.89%**; cursorBench31: **47.6%** (BenchLM)

Long context:

- 262K native (200–500K tier). MRCR / RULER / GraphWalks / AA-LCR: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 80/100.** TB 2.0 66.7% is above the mid 45–60% band; Toolathlon 50% is mid-strong; BrowseComp swarm 86.3% is high but swarm-specific. Capped by no TB 4.0/Tau3/GDPval and TB 2.0 still below the 88%+ TB 2.1 ref.
- **Reasoning: 85/100.** GPQA Diamond 90.5% is frontier; HLE-with-tools 54% is above the 40%+ ref while no-tools HLE 34.7% is not. Capped by Index 27 on the later BenchLM scale (or 44.2 on v4.1.1 — still under 60) and Omniscience 5.3.
- **Context window: 72/100.** 262K sits in the 200K–500K tier (200K = 70; 500K–1M = 85–94). No retrieval % to lift it.
- **Multimodal: 65/100.** “Native multimodal agentic” is treated as image-in (60–70). Audio/video not verified — not scored as omni. If a later card shows text-only API, this should drop to 15.
- **Coding: 90/100.** SWE-Verified 80.2% and LiveCodeBench 89.6% are frontier-class; SciCode 52.2% is near 55%+. Capped by SWE-Pro 58.6%, Vibe 37.89%, and Coding Index 61.8% (not 70%+).
- **Cost efficiency: 89/100.** $0.95/$4.00 sits next to the ~$1.25/$4.25 ≈88 anchor, slightly worse on input than ~$0.60/$2.20 ≈92. Not $0.
- **Overall Score: 78/100.** (80+85+72+65+90)/5 = 78.4 → 78 half-up. Best-fit: open-weight coding/agent at 256K when K3’s 1M window and higher list price are not required.

---

## Signature

- Provided by: **Grok 4.6 (x-ai/grok-4.6)** — 2026-10-01
- Method: public internet research (DocsBot, DeepInfra, benchr, BenchLM); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
