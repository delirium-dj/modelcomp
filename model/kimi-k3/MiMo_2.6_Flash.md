# Kimi K3 — findings by MiMo 2.6 Flash

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-10-07 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship and the world's first open 3T-class model — 2.8T-parameter sparse MoE (16/896 routed experts, 104B active) with Kimi Delta Attention + Attention Residuals, native vision, 1M context, always-on thinking. Frontier-tier on coding/agentic suites at launch (2026-07-16); weights published 2026-07-27 under the custom Kimi K3 License.
- **Provider / access:** kimi.com, Kimi API (OpenAI-compatible, `kimi-k3`), Moonshot platform; self-host via vLLM/SGLang/TokenSpeed (≥64 accelerators — ~1.4 TB 4-bit weights). Reasoning effort low/high/max (max default at launch).
- **Release / knowledge:** released 2026-07-16; knowledge cutoff not prominently published (March 2026-class expected) → not scored.
- **IDs:** `moonshot/kimi-k3` (gateway routes) / `kimi-k3` (native).
- **Context window:** 1,048,576 tokens; max output 131,072 default, configurable up to ~1.05M (944K reported by aggregators).
- **Modalities:** text, images, video in; text out; reasoning yes (thinking always on, low/high/max); tool calls yes (function calling, structured outputs, automatic free prefix caching — no cache-ID/TTL management).
- **Pricing (as of 2026-10-07):** **$3.00 in / $15.00 out** per 1M (first-party `platform.kimi.ai` verified 2026-08-18); cache-hit input $0.30 (90% off); cache writes $3 (5m) / $6 (1h); some aggregator routes quote $0.95/$14 — first-party rate is the scored one. Promotional top-up rebates at launch. Paid.
- **Architecture:** open-weight MoE, 2.8T total / 104B active, MXFP4/MXFP8, 93 layers (KDA, AttnRes, Stable LatantMoE, Gated MLA).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot vendor) / **85.0%** (Artificial Analysis independent, max).
- GDPval-AA v2: **1686–1687** Elo (vs Claude Fable 5 Max 1760, GPT-5.6 Sol Max 1747.8 — rank 3 overall at launch). AA-Briefcase: **1527** (#2, behind Fable 5 Max 1587).
- MCP Atlas: **84.2%** (vendor; AA similar). Toolathlon-Verified: **73.2%**; JobBench 52.9%; BrowseComp **91.2** (90.4 with full 1M window, no compaction).
- OSWorld / Tau3 / Claw-Eval / Terminal-Bench 4.0: no verified public score found.
- Arena Frontend Code: **#1 at launch (1679)**, ahead of Fable 5 in blind preference (rank 1/7 domains).

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot; AA independent also 93.5 — clears the 90%+ ref).
- HLE: **43.5%** no tools / **56%** with tools (Moonshot); AA text-only **44.4%** (clears the 40% ref).
- AA Intelligence Index: **57.1** (v4.1, max) → **59.7–60** on later feeds (top ~2% of 290); AA Coding Index **76.2**, Agentic Index **50.1–54.3**.
- AA-Omniscience: 18.4 (low). FrontierMath / CritPt / ARC-AGI: no verified public score found.

Coding:

- SWE-bench Verified: **93.4%** (Vals.ai independent bash-only harness, 500-task subset).
- DeepSWE: **67.5%** (v1.0) / **69%** (v1.1) — best open-model score on v1.0 at release but under the 74% frontier ref.
- AA Coding Index 76.2; SWE Marathon 42.0; Program Bench 77.8; Code Migration: no verified public score found.
- Frontend: Next.js Evals 92%, Supabase Evals 90.9% (no skills) / 86.4% (with skills); Arena Frontend #1.
- Vibe Code Bench / LiveCodeBench / SciCode / TB2.1-AA already noted above: no verified public score found for Vibe/LiveCode/SciCode.

Long context:

- BrowseComp at full 1M without context management: **90.4** (vs 91.2 with compaction at 300K) — proves 1M-window operation, but no MRCR/RULER needle-retrieval number.
- OmniDocBench: 91.1 (document parsing). MRCR / RULER / AA-LCR: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 88.3% meets the 88% frontier ref, MCP Atlas 84.2% and #2 AA-Briefcase are strong, but GDPval-AA 1686 sits below the 1750 frontier band, Toolathlon 73.2% is mid, and there's no Tau3/Claw-Eval/OSWorld/TB4.0 row.
- **Reasoning: 89/100.** GPQA 93.5 and HLE 43.5–56 both clear their frontier refs; AA Index ~57–60 is at/below the 60+ ref and AA-Omniscience 18.4 is weak — 89 not 90+.
- **Context window: 96/100.** 1,048,576 tokens with BrowseComp operating at full 1M without compaction (90.4) — well above the ≥1M tier floor; capped below 97 by the absence of any ≥98% needle-retrieval result at 512K+.
- **Multimodal: 85/100.** Text + image + video in (video-in band 75–90); MMMU-Pro 81.6, CharXiv Reasoning 84.8, OmniDocBench 91.1 support the upper half of that band; no audio and no non-text output → below 90.
- **Coding: 92/100.** Independent SWE-bench Verified 93.4% (Vals), TB2.1 88.3% (AA-confirmed 85.0), AA Coding Index 76.2, Arena Frontend #1 — frontier; held at 92 by DeepSWE 67.5–69% (under the 74% ref) and missing Vibe Code Bench/LiveCodeBench/SciCode rows.
- **Cost efficiency: 63/100.** $3/$15 is exactly the ~60 anchor price; the automatic 90%-off cache-hit input ($0.30) and free prefix caching lift it to 63 — output at $15 with always-on thinking still dominates bills, and third-party routes aren't first-party guaranteed.
- **Overall Score: 90/100.** (87+89+96+85+92)/5 = 89.8 → 90 — highest-scoring open-weight model encountered: frontier coding/reasoning at 1M context, with cost efficiency as the only anchor-category weakness.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-10-07
- Method: fresh public internet research (Benchgen, AI Release Tracker, whatllm.org, VentureBeat, BenchLM, AI Choice Engine, Kingy, LLMCost, Moonshot platform pricing); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
