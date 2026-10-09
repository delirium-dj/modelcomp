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

---

## Merged duplicate - Mimo_v2.6_Flash.md (same rater, spelling variant, merged 2026-10-09)

> This section preserves the full content of the deleted duplicate Mimo_v2.6_Flash.md (same Xiaomi MiMo 2.6 Flash rater; variant spelling _v2.6 vs _2.6 plus case). No benchmarks lost; canonical scores above remain the single parsed source (parser reads first score block).

# Kimi K3 — findings by Mimo V2.6 Flash

- Source: Moonshot AI/`kimi-k3`
- Date: 2026-09-23 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's 2.8T-parameter open-weight MoE flagship (July 2026) with native vision, 1M context, and frontier coding/agentic scores — first open 3T-class model; premium $3/$15 API pricing. Distinct from K2.8 Preview (mid-tier) and K2.6.
- **Provider / access:** Kimi API (OpenAI-compatible Chat Completions, `kimi-k3`), Kimi.com / Work / Code, OpenRouter, Cloudflare Workers AI; weights on Hugging Face (custom Kimi K3 License, shipped 2026-07-27). **No OpenCode Zen Free ID** (`noFreeId: true`).
- **Release / knowledge:** 2026-07-16 hosted; weights 2026-07-27; knowledge cutoff not published in sources reviewed.
- **IDs:** `kimi-k3` (Moonshot API); site meta `moonshotai/kimi-k3`.
- **Context window:** 1,048,576 tokens in; max output 131,072 default up to 1,048,576 (Benchgen / Cloudflare docs).
- **Modalities:** text, image in (native vision); text out; thinking always on (`reasoning_effort` max at launch, later low/high/max); tool calls; JSON mode via API.
- **Pricing (as of 2026-09-23):** $3.00 cache-miss in / $0.30 cache-hit in / $15.00 out per 1M (flat across context). Paid; no free tier.
- **Architecture:** 2.8T total / ~104B active (16 of 896 experts + shared); Stable LatentMoE + Kimi Delta Attention + Attention Residuals; MXFP4/MXFP8 QAT; open weights (custom license — internal use free, large MaaS/revenue triggers gated).

### Raw benchmarks found

> Measured numbers with (source / rank / harness). Missing rows = no verified public score found.

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot / Benchgen; Kimi Code harness — near GPT-5.6 Sol 88.8)
- MCP Atlas: **84.2%** (Moonshot table)
- GDPval-AA v2: **1668–1686 Elo** (Moonshot / AA-derived; Fable 5 1760)
- BrowseComp: **91.2%** (Moonshot; 90.4 at 1M no compaction)
- Automation Bench: **30.8%** (Moonshot)
- SWE Marathon: **42.0%** (Moonshot, Claude Code harness)
- Tau3 / Toolathlon / OSWorld: **no verified public score found** in rows reviewed
- Claw-Eval / ClawProBench: **no verified public score found**

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot)
- HLE: **43.5%** full / **56.0%** with tools (Moonshot / Turiloop)
- AA Intelligence Index: **44** (AA v4.3.2 model page, 2026-09-28 — max effort, #3/116 open weights behind MiMo-V2.6-Pro 46 and GLM-5.3 45; launch-era 57/59.7 superseded, see Fresh-source note)
- AA Coding Index: **76.2**; Agentic Index **54.3** (whatllm, 2026-08-28)
- LCR / CritPt / Omniscience: **no verified public score found**
- Arena Frontend Coding: **#1 at 1679** launch (independent blind votes)

Coding:

- DeepSWE 1.1: **67.5** (Moonshot; leaderboard 67.3 mini-SWE-agent)
- FrontierSWE: **81.2** (Fable 5 86.6 leads)
- Program Bench: **77.8** (Moonshot / Vals)
- Terminal-Bench 2.1: **88.3%**
- SWE-bench Verified: **no verified public score found** in these rows (K3 published DeepSWE/FrontierSWE/SWE-Marathon instead)
- LiveCodeBench / SciCode / Vibe: **no verified public score found**

Long context:

- 1,048,576 window documented; MRCR / RULER retrieval quality: **no verified public score found**

Multimodal:

- MMMU-Pro: **81.6%**; OmniDocBench: **91.1** (Moonshot)
- Native image in; video/audio: **no verified public score found** (not claimed)

- Fresh-source note (2026-09-28 re-audit, user-signed-off exception to RULES.md permanence): current AA-native **Intelligence Index 44** (max, #3/116 open weights) contradicts the launch-era 57/59.7 feed values (kie.ai/whatllm/Turiloop) — scores unchanged pending re-derivation.

### Normalized scores (1–100)

- **Tool use: 94/100.** TB2.1 88.3, MCP Atlas 84.2, GDPval-AA v2 ~1668, BrowseComp 91.2 — near-top agentic/tool stack; capped by AutomationBench ~31 and no public Tau3 row.
- **Reasoning: 93/100.** GPQA 93.5, HLE 43.5/56 tools, AA Index 44 (v4.3.2 refresh — #3 open weights); capped by HLE still below top Fable/Mythos-class 60%+ and verbose/slow serving notes from AA.
- **Context window: 96/100.** Full 1,048,576 in/out capacity (≥1M tier); no public MRCR % to claim the retrieval-verified 100.
- **Multimodal: 80/100.** Native vision with MMMU-Pro 81.6 and OmniDocBench 91.1 (strong image/doc); no audio/video in/out → not 90+.
- **Coding: 94/100.** TB2.1 88.3, DeepSWE 67.5, Program Bench 77.8, FrontierSWE 81.2, Arena #1 frontend — frontier coding/agent; capped slightly by no public SWE-V row and trails Fable 5/Sol on DeepSWE/FrontierSWE.
- **Cost efficiency: 60/100.** $3/$15 hits the $3/$15≈60 anchor exactly; 90% cache-hit discount ($0.30) and flat 1M pricing soften agentic bills but verbose thinking raises per-task cost (~$0.94/AA task).
- **Overall Score: 91/100.** Mean of Tool 94 + Reasoning 93 + Context 96 + Multimodal 80 + Coding 94 = 457/5 = 91.4 → **91** (best-fit: open-weight frontier for long-horizon coding and 1M-context vision work when $3/$15 budget and supernode/API access fit).

---

## Signature

- Provided by: **Mimo V2.6 Flash (opencode/mimo-v2.6-flash)** — 2026-09-23
- Method: public internet research (Moonshot K3 tech blog, Benchgen, whatllm, kie.ai, Turiloop, Graphify); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.

