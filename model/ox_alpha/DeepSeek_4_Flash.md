# Ox Alpha — findings by DeepSeek 4 Flash

- Source: Stealth/Tokenra Ox Alpha
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha
- **Short description:** Anonymous stealth frontier reasoning model served on the Tokenra `stealth/ox-alpha` route (and free on OpenCode Zen during preview) for long-horizon coding agents, with a 1M context and multimodal input. Third-party benchmark coverage is label-level only.
- **Provider / access:** Tokenra `stealth/ox-alpha`; OpenCode Zen free tier during preview.
- **Release / knowledge:** preview (2026); vendor undisclosed; knowledge cutoff not disclosed.
- **IDs:** `stealth/ox-alpha`; `opencode/ox-alpha`
- **Context window:** 1M total / 131K max output — per curated provider metadata.
- **Modalities:** text, image, video, PDF in; text out; reasoning yes.
- **Pricing (as of 2026-10-01):** Free on OpenCode Zen during the limited preview; Tokenra route otherwise.
- **Architecture:** stealth / undisclosed.

### Raw benchmarks found

> Coverage is label-level third-party; the LiveBench listing for `ox-alpha-max` is not route-verified for `stealth/ox-alpha` (per Ox Alpha's own disclosure page). Treat as directional.

Agent / tool use:

- LiveBench agentic coding (label `ox-alpha-max`): **52.6**
- No Terminal-Bench / Tau3 / GDPval-AA route-verified score found

Reasoning / knowledge:

- LiveBench overall **69.2**; reasoning **76.6**; mathematics **77.5**; language **66.1**; instruction following **60.3** (LiveBench 2026-06-25 snapshot)
- GPQA Diamond / HLE: no verified public score found

Coding:

- LiveBench coding **75.8**; data analysis **75.8**
- Ox Alpha community coding benchmark: **80% mean pass rate** on 10 real-world coding tasks (oxalpha.com); unverified route parity

Multimodal:

- text, image, video, PDF input claimed by provider metadata; no MMMU/vision benchmark found

Long context:

- No MRCR/RULER value reported; 1M context claimed

### Normalized scores (1–100)

- **Tool use: 55/100.** LiveBench agentic coding 52.6 is mid; no Terminal-Bench/Tau3 evidence to raise confidence.
- **Reasoning: 75/100.** LiveBench reasoning 76.6 and math 77.5 are strong; label-level (non-route-verified) provenance caps it.
- **Context window: 95/100.** 1M input / 131K output claimed; no retrieval benchmark.
- **Multimodal: 80/100.** Text/image/video/PDF in per provider metadata; text-only output, unmeasured.
- **Coding: 78/100.** LiveBench coding 75.8 and an unverified 80% community pass rate.
- **Cost efficiency: 100/100.** Free on OpenCode Zen during the limited preview.
- **Overall Score: 77/100.** Mean of (55 + 75 + 95 + 80 + 78) / 5 = 76.6 → 77. Best-fit: free long-context multimodal coding agent, pending route-verified benchmarks.

---

## Signature

- Provided by: **DeepSeek 4 Flash (deepseek/deepseek-v4-flash)** — 2026-10-02
- Method: public internet research (Ox Alpha/LiveBench disclosure page, oxalpha.com, provider metadata); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
