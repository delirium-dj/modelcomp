# Claude Mythos 5.1 — findings by LongCat 2.5 Preview

- Source: Anthropic (`claude-mythos-5-1`)
- Date: 2026-09-27 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Claude Mythos 5.1
- **Short description:** Anthropic's newest Mythos-class model — the same underlying weights as Claude Fable 5.1 with the cybersecurity and biology safeguards lifted; gains over Mythos 5 in cyber and bio benchmarks. Invitation-only access for vetted cyberdefenders and life scientists.
- **Provider / access:** Anthropic Claude API — `claude-mythos-5-1` (Chat Completions-style messages API; adaptive thinking always on, default effort high). Project Glasswing trusted-access programs only (vetted US organizations; expansion in progress). Also Microsoft Foundry for approved users. Released 2026-09-01.
- **Release / knowledge:** Released 2026-09-01; reliable knowledge cutoff June 2026.
- **IDs:** `anthropic/claude-mythos-5-1` (Bedrock/Vertex/Foundry), `claude-mythos-5-1` (Claude API). No Zen Free ID — paid, restricted access.
- **Context window:** 1M tokens; 128K max output (verified via Anthropic docs + LLMReference).
- **Modalities:** Text and image in; text out; reasoning yes (adaptive, always on); tool calls, structured outputs, code execution, caching. 30-day data retention for safety monitoring by default.
- **Pricing (as of 2026-09-27):** $10.00/M in, $50.00/M out; cache read $0.25/M; cache writes $12.50/$20.00/M; Batch API 50% off. Paid, invitation-only.
- **Architecture:** Proprietary; identical weights to Claude Fable 5.1 (only the safeguard configuration differs).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 4.0: **60.9%** (Anthropic launch table — vs Fable 5.1 55.8%, Opus 5 52.3%)
- Cyber evaluations: substantially outperforms Claude Opus 5 on almost all reported cyber evals (ExploitBench, OSS-Fuzz, Firefox 147, ExploitGym) — strongest overall cyber capabilities of any Anthropic model released (system card); absolute scores not published
- OSWorld / GDPval / Tau3 (direct): no verified public score found

Reasoning / knowledge:

- GPQA Diamond: no direct verified public score found for this exact model ID — closest proxies: Claude Mythos Preview **94.6%** (llm-stats) and Mythos 5 **94.1%** (BenchLM), provisional
- HLE: no direct verified public score found — closest proxy Mythos 5 at **64.5%** (BenchLM), provisional

Coding:

- SWE-bench Verified: no direct verified public score found — closest proxy Fable 5.1 (same weights) at **95.5%** for Mythos 5 / 81.2% SWE-bench Pro (Fable 5.1), provisional
- SWE-bench Pro: no direct verified public score found (proxy above)

Long context:

- No long-context retrieval (MRCR/RULER) score published for this exact model ID.

### Normalized scores (1–100)

- **Tool use: 90/100.** TB4.0 60.9% is the highest tier on the hardest terminal benchmark, and the cyber evaluation suite is best-in-class per the system card; no GDPval/OSWorld absolute to confirm 95.
- **Reasoning: 92/100.** Provisional: no GPQA/HLE absolute published for this exact model ID; the Mythos-class proxies (GPQA 94.1–94.6%, HLE 64.5%) sit at the top of the frontier band.
- **Context window: 95/100.** 1M tokens with 128K output earns the ≥1M tier; no published 512K+ retrieval result to confirm the top of the band.
- **Multimodal: 70/100.** Text/image input lands in the +image-in 60–70 band; no audio/video input and text-only output cap it there.
- **Coding: 92/100.** Provisional: same weights as Fable 5.1 (SWE-bench Pro 81.2%) with cyber gains on top; direct Mythos 5.1 coding absolutes not published.
- **Cost efficiency: 30/100.** $10/$50 pricing matches the methodology's $10/$50 ≈ 30 reference point exactly; invitation-only access further limits practical availability.
- **Overall Score: 88/100.** Mean of the five quality dims (90+92+95+70+92)/5 = 87.8 → 88. Best-fit: the pick for vetted cybersecurity/life-science work where Mythos-class capability is required — identical capability to Fable 5.1 with the dual-use safeguards lifted.

---

## Signature

- Provided by: **LongCat 2.5 Preview (Meituan/LongCat-2.5-Preview)** — 2026-09-27
- Method: public internet research (Anthropic system card + launch materials, llm-stats, BenchLM, LLMReference); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
