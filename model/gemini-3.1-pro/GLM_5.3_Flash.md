# Gemini 3.1 Pro — findings by GLM 5.3 Flash

- Source: Google / Google DeepMind (`gemini-3.1-pro`)
- Date: 2026-10-10 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Gemini 3.1 Pro
- **Short description:** Google DeepMind's early-2026 Pro-tier flagship (superseded in the lineup by Gemini 3.6/3.8 Flash for agents and by Gemini 4 Argon, released 2026-09-30; DeepMind's Pro page now banners "3.5 Pro coming soon"). Strong classical reasoning (GPQA 94.3%, ARC-AGI-2 77.1%) but mid-pack on current agentic indices and weak at extreme long-context retrieval.
- **Provider / access:** Google API (`google/gemini-3.1-pro`; Zen id `opencode/gemini-3.1-pro`); OpenCode Zen lists it at $2.00/$12.00 (≤200K) — tiered pricing below.
- **Release / knowledge:** Released 2026-02-19 (official blog.google announcement; model card published 19 February 2026; minor conflict: some coverage says Feb 20). Knowledge cutoff January 2025 (llm-stats; the 3.1 Pro card defers to the Gemini 3 Pro card).
- **IDs:** `google/gemini-3.1-pro` (preview id `gemini-3.1-pro-preview` on aggregators).
- **Context window:** 1M input / 64K max output — verified via deepmind.google/models/gemini/pro + model card + Artificial Analysis + llm-stats. (Correction 2026-10-10: this report previously claimed 2M; no fetched source supports 2M.)
- **Modalities:** text, image, video, audio, PDF in; text out (official model info; AA: "text, image, speech, and video").
- **Pricing (as of 2026-10-10):** $2.00 in / $12.00 out per 1M for prompts ≤200K tokens; $4.00/$18.00 above 200K (whole request reprices at the long-context rate) — verdent.ai citing ai.google.dev, corroborated by benchlm.ai (2026-10-08) and developer.puter.com. Cached-read conflict: verdent cites $0.50/$1.00 (75% discount), AA shows a 90% cache discount (→ ~$0.20) — unresolved; AA blended $1.30/task on the Index.
- **Architecture:** proprietary, undisclosed ("based on Gemini 3 Pro" per model card). Speed: 118.2 tok/s, TTFT 24.8s (AA).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.0 (Terminus-2, vendor, Thinking High): **68.5%**; third-party TB 2.1 read: **70.3%** (aimadetools)
- Terminal-Bench 4.0: value unpublished on AA's page (AA II v4.3.2 includes it; per-eval values withheld)
- Tau2-Bench (vendor): Retail **90.8%** / Telecom **99.3%**
- MCP Atlas (vendor): **69.2%**
- BrowseComp (vendor): **85.9%**
- APEX-Agents (vendor): **33.5%**
- GDPval-AA (vendor, Thinking High): Elo **1317** — behind Sonnet 4.6's 1633 in Google's own table
- OSWorld: **76.2%** (aimadetools, May 2026; Google's table omits OSWorld)

Reasoning / knowledge:

- GPQA Diamond (vendor): **94.3%**
- HLE (vendor): **44.4%** no-tools / **51.4%** with tools
- ARC-AGI-2 (ARC Prize Verified, vendor): **77.1%**
- MMMU-Pro (vendor): **80.5%**; MMMLU: **92.6%**
- MRCR v2 8-needle (vendor): **84.9%** @128K, **26.3%** @1M
- Artificial Analysis Intelligence Index v4.3.2: **30** (#95/227; median 26; $1.30/task; 118.2 tok/s) — AA page, 2026-10-10. Conflict: at launch AA scored it **57 on v4.0, #1 overall** (smartscope, 2026-02-20); the v4.0→v4.3.2 recomposition is not reconcilable from public pages — do not mix versions.

Coding:

- SWE-bench Verified (vendor): **80.6%**
- SWE-bench Pro Public (vendor): **54.2%**
- LiveCodeBench Pro (vendor): Elo **2887**
- SciCode (vendor): **59%**
- No new independent coding re-runs found in October 2026.

Long context:

- MRCR v2 8-needle @1M: **26.3%** (vendor) — near-failure at the full window; reliable to ~128K (84.9%).

### Normalized scores (1–100)

- **Tool use: 84/100.** Solid vendor agentic numbers (TB2.0 68.5%, Tau2 Telecom 99.3%, MCP Atlas 69.2%, BrowseComp 85.9%) but GDPval-AA Elo 1317 trails its own competitor table and the current AA Index rank (#95/227, agentic components included) places it mid-pack among October 2026 models.
- **Reasoning: 87/100.** GPQA Diamond 94.3%, ARC-AGI-2 77.1% and HLE 51.4% (with tools) are genuinely frontier-adjacent, but the v4.3.2 AA Index read (30, #95/227) and MMLU-Pro-era successors (3.5 Flash beats it on 6/8 tracked benchmarks) cap it well below the 90+ tier.
- **Context window: 90/100.** 1M-token window advertised, but measured 8-needle retrieval collapses to 26.3% at 1M (84.9% at 128K) — the window exists, the usable long-context does not; docked hard against the ≥1M tier norm of 95+.
- **Multimodal: 88/100.** Text, image, video, audio, and PDF input with text output — the top of the +video/audio-in band; MMMU-Pro 80.5% supports real multimodal competence; no non-text output.
- **Coding: 85/100.** SWE-bench Verified 80.6% and LiveCodeBench Pro Elo 2887 are strong-for-February but SWE-bench Pro 54.2% and SciCode 59% trail the 2026 frontier; no independent October re-runs to lift it.
- **Cost efficiency: 65/100.** $2/$12 (≤200K) with a 2× long-context surcharge maps to ~60 on the inverse-pricing rubric; nudged up by the $1.30/task AA Index cost and a cached-read discount (75–90% depending on source); no free-tier evidence found on the paid API (a consumer free tier exists in the Gemini app, not the API).
- **Overall Score: 87/100.** (84+87+90+88+85)/5 = 434/5 = 86.8 → 87. Best fit: classical reasoning/knowledge work and multimodal understanding at ≤200K context; avoid for 512K+ retrieval tasks and for cutting-edge agentic coding, where Gemini 3.5/3.8 Flash and Gemini 4 Argon outclass it.

---

## Signature

- Provided by: **GLM 5.3 Flash (zai/glm-5.3-flash)** — 2026-10-10
- Method: public internet research, second pass 2026-10-10 (≥3 independent sources: deepmind.google model card + models page, Artificial Analysis, llm-stats, verdent.ai/benchlm.ai pricing, aimadetools/smartscope analyses); scores are normalized 1–100 interpretations, not official vendor scores. This pass replaces a 2026-09-20 scaffold-grade version (corrected 2M→1M context claim, added the missing raw-benchmark evidence, recalculated all dims).
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
