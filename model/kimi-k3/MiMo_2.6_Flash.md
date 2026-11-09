# Kimi K3 — findings by MiMo 2.6 Flash

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-11-08 (UTC) — second-pass enrichment re-research (previous 2026-10-07)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Second-pass enrichment — 2026-11-08.** Previous report 2026-10-07 (Overall 90). Fresh sources: BenchLM model page (updated 2026-11-07), Artificial Analysis model page + leaderboards (Intelligence Index v5.0.1), ARC Prize results. Changes: **Multimodal 85 → 87** (CharXiv 91.3 with tools, MathVision 94.3/97.8 Python, MMMU-Pro+Python 83.4 strengthen the vision stack) and **Coding 92 → 93** (LiveCodeBench 87.2 and AA-SciCode 59.5 fill two rows the previous pass marked "no verified score"). Held: tool use (new AA rows Tau3-Banking 46.0 / ITBench 47.7 / EnterpriseOps 45.3 are mid and GDPval-AA revised 1686 → 1584 Elo, netting out), reasoning (AA-HLE 46.9 and ARC-AGI-2 60.4 up, but AA-Omniscience still weak and the Index re-indexed to v5.0.1 = 43.6 — not comparable to the old v4.1 57–60 scale), context (AA-LCR 88.7 fills the long-context-reasoning gap but still no ≥98% needle-retrieval row), cost ($3/$15 + 90% cache discount unchanged on AA). Overall 90 → 90.

## Model card

- **Name:** Kimi K3
- **Short description:** Moonshot AI's flagship and the world's first open 3T-class model — 2.8T-parameter sparse MoE (16/896 routed experts, 104B active) with Kimi Delta Attention + Attention Residuals, native vision, 1M context, always-on thinking. Frontier-tier on coding/agentic suites at launch (2026-07-16); weights published 2026-07-27 under the custom Kimi K3 License. AA now flags it as **deprecated in favor of Kimi K3.1 Pro** (benchmarked every 18h instead of 6h); still ranked #16 of 1016 on BenchLM (69.58, partial coverage, updated 2026-11-07).
- **Provider / access:** kimi.com, Kimi API (OpenAI-compatible, `kimi-k3`), Moonshot platform; 15 API providers on AA; self-host via vLLM/SGLang/TokenSpeed (≥64 accelerators — ~1.4 TB 4-bit weights). Reasoning effort low/high/max (max shown by AA).
- **Release / knowledge:** released 2026-07-16; knowledge cutoff not prominently published (March 2026-class expected) → not scored.
- **IDs:** `moonshot/kimi-k3` (gateway routes) / `kimi-k3` (native).
- **Context window:** 1,048,576 tokens; max output 131,072 default, configurable up to ~1.05M.
- **Modalities:** text, images in; text out; video-in claimed at launch (vendor); reasoning yes (thinking always on, low/high/max); tool calls yes (function calling, structured outputs, automatic free prefix caching).
- **Pricing (re-verified 2026-11-08 on AA):** **$3.00 in / $15.00 out** per 1M (Kimi API; blended 7:2:1 ≈ $2.31), cache discount **90%** (cache-hit input $0.30); AA notes both prices are at the higher end vs medians ($0.47 / $1.97). Paid.
- **Architecture:** open-weight MoE, 2.8T total / 104B active, MXFP4/MXFP8, 93 layers (KDA, AttnRes, Stable LatantMoE, Gated MLA); Kimi K3 License (commercial use allowed with restrictions).

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot vendor) / **85.0%** (Artificial Analysis independent) / **80.9%** (Vals independent).
- GDPval-AA: **1584 Elo** (AA, revised down from the 1686–1687 launch-era figure) / 51.6% normalized; AA-Briefcase-class agentic rows: ITBench 47.7%, EnterpriseOps-Gym 45.3%, AnalystAgent 38.8%, **Tau3-Banking 46.0%** (all AA — fills the previous "no Tau3 row").
- MCP Atlas **84.2%**; Toolathlon-Verified **73.2%**; JobBench 52.9%; BrowseComp **91.2** (90.4 with full 1M window); AutomationBench 30.8%; Harvey LAB-AA **94.6%**; DeepSearchQA 95.0%.
- AA Agentic Index **50.6**; Vals TB2.1 80.9%; Terminal-Bench 4.0 / OSWorld / Claw-Eval: no verified public score found.

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot; AA independent also 93.5; Vals 92.9%).
- HLE: **43.5%** no tools / **56%** with tools (Moonshot); **AA-HLE 46.9%** (independent, up from 44.4).
- AA Intelligence Index: **43.6** (AA model benchmarks, **v5.0.1** scale — not comparable to the old v4.1 57–60 feed values; AA page currently shows N/A as the model is deprecated); AA-Omniscience Index 19.7 (weak), CritPt 23.4.
- **ARC-AGI-1: 94.50% / ARC-AGI-2: 60.4%** (ARC Prize published Semi-Private results — fills the previous "no ARC-AGI row").
- FrontierMath: no verified public score found.

Coding:

- SWE-bench Verified: **93.4%** (Vals independent bash-only harness, 500-task subset).
- **LiveCodeBench (Vals): 87.2%** and **AA-SciCode: 59.5%** — both newly verified (previous pass: no score found).
- DeepSWE **67.5%** (v1.0) / 69% (v1.1) — still under the 74% frontier ref; FrontierSWE 81.2%, FrontierSWE v2 25.9%, FrontierCode 2.0 17.7%, Program Bench 77.8%, SWE Marathon 42.0%, Kimi Code Bench v2 72.9%.
- AA Coding Index **76.2**; CursorBench 3.2 60.8%; Vibe Code Bench: no verified public score found.
- Frontend: Arena Frontend Code **#1 at launch (1679)**; Next.js Evals 92%, Supabase Evals 90.9%.

Long context:

- **AA-LCR: 88.7%** (AA long-context reasoning leaderboard — fills the previous "no AA-LCR row").
- BrowseComp at full 1M without compaction: **90.4** — proves 1M-window operation; MRCR / RULER needle retrieval: no verified public score found.
- OmniDocBench: 91.1 (document parsing).

Multimodal:

- MMMU-Pro **81.6%** (83.4% w/ Python; AA-independent 80.5%); **CharXiv 91.3** with tools (84.8 w/o tools); **MathVision 94.3%** (97.8% w/ Python); OmniDocBench 91.1; ExtractBench 83.17; OfficeQA Pro 63.3%; ZeroBench 23.0 (41.0 w/ Python).
- Video-in claimed at launch (vendor); audio in/out: no verified public score found.

### Normalized scores (1–100)

- **Tool use: 87/100.** TB2.1 88.3% meets the 88% frontier ref, MCP Atlas 84.2% and BrowseComp 91.2 are strong, but GDPval-AA was revised down to 1584 Elo (was 1686), the new AA agent rows (Tau3-Banking 46.0, ITBench 47.7, EnterpriseOps 45.3) are mid, AutomationBench is 30.8, and there's still no TB4.0/OSWorld/Claw-Eval row.
- **Reasoning: 89/100.** GPQA 93.5, HLE 43.5–56 and AA-HLE 46.9 clear their frontier refs, and ARC-AGI-2 60.4 is newly verified; but AA-Omniscience 19.7 and CritPt 23.4 stay weak, and the AA Index (43.6, v5.0.1 re-index) is a new scale — no basis for 90+.
- **Context window: 96/100.** 1,048,576 tokens with BrowseComp operating at full 1M without compaction (90.4) and now AA-LCR 88.7 — well above the ≥1M tier floor; capped below 97 by the absence of any ≥98% needle-retrieval result at 512K+.
- **Multimodal: 87/100.** (was 85) Text + image in (video-in claimed by vendor); CharXiv **91.3** with tools, MathVision **94.3/97.8** Python, MMMU-Pro 81.6–83.4 (AA 80.5) and OmniDocBench 91.1 now support the top of the video-in band; no audio and no non-text output → below 90.
- **Coding: 93/100.** (was 92) Independent SWE-bench Verified 93.4% (Vals), TB2.1 88.3%, **LiveCodeBench 87.2% (Vals)** and **AA-SciCode 59.5%** newly verified, AA Coding Index 76.2, Arena Frontend #1; held below the mid-90s by DeepSWE 67.5–69% (under the 74% ref), FrontierCode 2.0 17.7%, and no Vibe Code Bench row.
- **Cost efficiency: 63/100.** $3/$15 re-verified on AA (exactly the ~60 anchor price; blended $2.31); the automatic 90%-off cache-hit input ($0.30) and free prefix caching lift it to 63 — output at $15 with always-on thinking still dominates bills, and AA flags both prices as high-end vs market medians.
- **Overall Score: 90/100.** (87+89+96+87+93)/5 = 90.4 → 90 — highest-scoring open-weight model encountered: frontier coding/reasoning at 1M context, with cost efficiency as the only anchor-category weakness.

---

## Signature

- Provided by: **MiMo 2.6 Flash (Xiaomi — opencode/mimo-v2.6-flash)** — 2026-11-08
- Method: fresh public internet research (BenchLM, Artificial Analysis model page + Tau3/SciCode/LCR leaderboards, ARC Prize results, Vals AI leaderboards, Moonshot launch blog); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - https://benchlm.ai/models/kimi-k3
  - https://artificialanalysis.ai/models/kimi-k3
  - https://arcprize.org/results/moonshot-kimi-k3
  - https://huggingface.co/moonshotai/Kimi-K3
  - https://www.kimi.com/blog/kimi-k3
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
