# Kimi K3 — findings by GLM 5.3 Flash

- Source: Moonshot AI (`kimi-k3`)
- Date: 2026-11-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Kimi K3 (open frontier flagship, no Free-tier wording; platform now labels it the "previous-generation flagship" after K3.1 Pro)
- **Short description:** Moonshot AI's 2.8T-parameter open-weight sparse-MoE flagship — the world's first open 3T-class model — with native text/image/video understanding and a 1M-token window, built for long-horizon coding, knowledge work, and deep reasoning. Moonshot itself places it behind Claude Fable 5 and GPT-5.6 Sol overall while beating Claude Opus 4.8 and GPT-5.5 on most of its coding/agentic table.
- **Provider / access:** Moonshot first-party Kimi API: model ID `kimi-k3` at `https://api.moonshot.ai/v1` (Chat Completions; OpenAI- and Anthropic-compatible). Also Amazon Bedrock (`moonshotai.kimi-k3`, live 2026-09-18) and OpenRouter (`moonshotai/kimi-k3`); weights on Hugging Face (`moonshotai/Kimi-K3`). No Free ID exists on OpenCode Zen.
- **Release / knowledge:** Hosted API launch 2026-07-16; full open weights released 2026-07-27; arXiv technical report 2607.24653 on 2026-08-07; Amazon Bedrock launch 2026-09-18. Knowledge cutoff: not published in any source fetched as of 2026-11-02.
- **IDs:** `kimi-k3` (Kimi API) / `moonshotai/kimi-k3` (OpenRouter) / `moonshotai.kimi-k3` (Bedrock) / `moonshotai/Kimi-K3` (HF weights).
- **Context window:** 1,048,576 tokens total (HF model card; independently confirmed by Artificial Analysis via IntuitionLabs, Sept 2026). Max output: `max_completion_tokens` defaults to 131,072 and can be set up to 1,048,576 (platform.kimi.ai docs) — verified from vendor docs.
- **Modalities:** Text, image, and video in (vision encoder MoonViT-V2; images via base64, video via files API `video_url`); text out. Reasoning: always on, `reasoning_effort` = low/high/max (default max), returns `reasoning_content` with preserved thinking history. Tool calls: yes, including `tool_choice="required"` and dynamic tool loading. JSON mode: yes, strict `json_schema` response format.
- **Pricing (as of 2026-11-02):** platform.kimi.ai flat pay-as-you-go: $3.00 in / $15.00 out / $0.30 cache hit / $3.00 cache write (5m or 1h TTL) per 1M tokens, no context-length tiering. Bedrock Global: $3.00 / $15.00 / $0.30 cache read / $3.75 cache write. OpenRouter third-party routes from $0.1495 / $7.15 (Sail Research). Paid only: flagship unlock requires a $1 top-up; no free tier.
- **Architecture:** Open weights under the custom Kimi K3 License (commercial use restricted — not Apache/MIT). Sparse MoE: 2.8T total / 104B activated; 93 layers (69 Kimi Delta Attention + 24 Gated MLA, plus Attention Residuals); 896 routed experts, 16 selected + 2 shared (Stable LatentMoE); SiTU-GLU; 160K vocab; 401M-param MoonViT-V2 vision encoder; native MXFP4 weights / MXFP8 activations via quantization-aware training; ~2.5× scaling efficiency vs K2. Runs on vLLM/SGLang/TokenSpeed.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2.1: **88.3%** (Moonshot HF card, max effort, Kimi Code harness); Artificial Analysis own run **85.0%** (Max); Vals AI independent **80.9%** (Terminus 2)
- Terminal-Bench 4.0: **12.6%** (Artificial Analysis, Max) / **17.2%** (Vals AI, Mini-SWE-agent) — weak on the TB4 generation
- τ³-Banking: **33.4%** (Moonshot table, cited from AA as of 2026-07-23); AA τ-Bench Banking: **46.0%** (Max, OpenRouter-sourced AA run)
- GDPval-AA v2: **Elo 1686** (Moonshot table citing AA, 2026-07-23; #3 of its 6-model table); AA GDPval-AA: **52.2%** (Max, OpenRouter)
- Toolathlon-Verified: **76.5%**; MCP-Atlas (500-task public subset): **84.2%**; MCPMark-Verified: **94.5%** (all Moonshot table)
- AA-Briefcase (agentic knowledge work): **Elo 1548**, #2 behind Claude Fable 5's 1583 (Moonshot citing AA; VenturePost reads 1527)
- BrowseComp: **91.2%** with 300K-token compaction / **90.4%** at the full uncompacted 1M window (Moonshot); DeepSearchQA F1 **95.0%**
- OSWorld-Verified: **84.8%**; OSWorld 2.0: **58.3%**; AutomationBench: **30.8%**; APEX-Agents: **41.0%** (Moonshot table; HF eval-results confirm 41.0)
- AA Agentic Index: **50.0** (Max, OpenRouter-sourced AA run)
- Claw-Eval / ClawProBench: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **93.5%** (Moonshot, max; AA run 93.5%; Vals 92.9%; Epoch run 93.1% — four-source agreement)
- HLE: **43.5%** no tools / **56.0%** with tools (Moonshot HF card, max); AA HLE: **46.9%** (Max)
- AA-LCR: **88.7%** (AA Max run, OpenRouter) vs **74.7** in Moonshot's table (AA-LCR v1.1 cited as of 2026-07-23) — version/harness difference, both cited
- CritPt: **23.4%** (Moonshot, max; below GPT-5.6 Sol 32.3 and Fable 5 28.6)
- ARC-AGI: **94.5%** / ARC-AGI-2: **60.4%** (Epoch-run rows surfaced via llmbenchmark.ai aggregation, Max)
- FrontierMath: tiers 1–3 **72.2%** / tier 4 **39.0%** (Epoch-run rows via llmbenchmark.ai); OTIS Mock AIME **97.2%**
- Artificial Analysis Intelligence Index: **~57 (Max)** per IntuitionLabs (Sept 2026) and ai.lounge (#2 of 16 tracked); earlier v4.3.2 re-base read 43.6–44; Low-effort read **17.4** (OpenRouter) — index version and effort change the value materially; all cited
- AA-Omniscience (Low): accuracy **42.4%** / non-hallucination rate **23.4%** (OpenRouter-sourced AA run)

Coding:

- SWE-bench Verified: **93.40%** (Vals AI independent run, Mini-SWE-agent, #8 of 88; page frozen Sep 1 2026, reconfirmed via Ridge as of 2026-11-01) — highest-scoring open-weight model on that board; Moonshot published no official SV score
- SWE-bench Pro V2: **97.7%** (mini-swe-agent, max; llmbenchmark.ai aggregation, #4 of 15 — rescaled V2 benchmark, provisional)
- LiveCodeBench: **87.2%** (Vals AI)
- Vibe Code Bench v1.1: **85.0%** (Vals AI, OpenHands); Vibe Code Bench 1–100: **18.2%** (Vals) — divergent harness pair, both cited
- DeepSWE: **67.5%** (Moonshot; HF eval-results confirm); SWE-Marathon: **42.0%** (best of the six-model vendor table); FrontierSWE: **81.2%** (Moonshot) vs **25.9%** (AA-run v2 via llmbenchmark — harness/version conflict, both cited)
- SciCode: **58.7%** (Moonshot) / **59.5%** (AA Max run)
- Terminal-Bench 2.1 (coding harness): **88.3%** (Moonshot); Kimi Code Bench 2.0: **72.9%**; ProgramBench: **77.8%** (vendor) vs **2.0%** (Vals) — extreme vendor-vs-independent divergence
- SWE-bench Multimodal: **44.2%** (Vals AI)
- Frontend Code Arena (blind developer ranking): **#1 at launch, 1679 Elo** (Arena.ai via Tom's Hardware)

Long context:

- MRCR v2 (8-needle): **91.5/100** overall (#4 of 25 tracked) and **73.8/100** in the 512K–1M band (#2 of 4) — independent long-context leaderboard reads surfaced via wisgate.ai aggregation
- GraphWalks BFS: **90.7/100** at >128K (#1 of 12) and **77.1%** in the 256K–1M band (#1); GraphWalks parents >128K: **95.4/100** (#1 of 7) (wisgate.ai / anotherwrapper aggregations)
- AA-LCR: **88.7%** (Max) / **74.7** (v1.1, vendor-cited) — see above
- No needle-in-a-haystack or RULER score published by Moonshot or any third party as of Sept 2026 (IntuitionLabs documents this gap explicitly); retrieval-at-depth is instead evidenced by MRCR/GraphWalks rows above

### Normalized scores (1–100)

- **Tool use: 88/100.** Terminal-Bench 2.1 88.3% (vendor; AA 85.0, Vals 80.9), MCPMark 94.5%, MCP-Atlas 84.2%, BrowseComp 91.2% and GDPval-AA v2 Elo 1686 keep it at the frontier, but the weak Terminal-Bench 4.0 generation (12.6–17.2%), AA Agentic Index 50.0 and τ³-Banking 33.4/46.0 cap it below the closed leaders.
- **Reasoning: 89/100.** GPQA Diamond 93.5% with four-source agreement, HLE 56.0% with tools (AA 46.9%), ARC-AGI-2 60.4% and AA-LCR 88.7% (Max) are elite, but CritPt 23.4% trails GPT-5.6 Sol (32.3) and Fable 5 (28.6), and the AA Intelligence Index version spread (44–57 Max) plus a 23.4% non-hallucination rate cap it below 90.
- **Context window: 97/100.** 1,048,576-token window with output configurable to 1,048,576, now backed by independent retrieval-at-depth evidence (MRCR v2 8-needle 73.8/100 at 512K–1M; GraphWalks BFS 77.1% at 256K–1M, #1 of tracked) — top tier; no published NIAH/RULER and a handful of leaders matching the window size keep it off 100.
- **Multimodal: 84/100.** Native text+image+video input (MoonViT-V2; platform `video_url` files API) with text-only output, scoring near the top of the vision suite (Video-MME 90.0%, MMMU-Pro 83.4% w/ Python, MathVision 97.8% w/ Python, OmniDocBench 91.1%); no audio input and no image/video generation cap it below fully multimodal peers.
- **Coding: 91/100.** Independent SWE-bench Verified 93.40% (#8/88, top open-weight on the board), LiveCodeBench 87.2%, SWE-Marathon 42.0% (best of its comparison set) and blind Frontend Code Arena #1 at launch; caps are DeepSWE 67.5%, the ProgramBench vendor-vs-Vals divergence (77.8 vs 2.0) and Claude Opus 5's 97.0% SV ceiling.
- **Cost efficiency: 78/100.** $3/$15 per 1M with a 90% cached-input discount ($0.30) and open MXFP4 weights (self-hosting viable on one 8-GPU 192GB node) is strong frontier value — Vals measured $0.76/test on SWE-bench Verified vs Claude Opus 5's $1.29, and OpenRouter routes run as low as $0.15/$7.15 — but there is no free tier (paid-only after a $1 top-up), the output price is premium, and Moonshot's own K3.1 Pro now undercuts it at $2/$10.
- **Overall Score: 90/100.** (88 + 89 + 97 + 84 + 91) / 5 = 449/5 = 89.8 → 90. Best fit: long-horizon agentic coding and million-token research work where open weights, deep retrieval, and per-task cost matter more than squeezing the last few points of closed-model reasoning.

---

## Signature

- Provided by: **GLM 5.3 Flash (z-ai/glm-5.3-flash)** — 2026-11-02 (re-research pass; prior 2026-10-16)
- Method: public internet research (approved re-research pass); scores are normalized 1–100 interpretations, not official vendor scores.
- Reference URLs:
  - [Moonshot AI Kimi K3 model card (Hugging Face)](https://huggingface.co/moonshotai/Kimi-K3)
  - [Kimi API Platform — Kimi K3 quickstart (IDs, limits, pricing, modalities)](https://platform.kimi.ai/docs/guide/kimi-k3-quickstart)
  - [Vals AI — SWE-bench Verified leaderboard (independent 93.40% run)](https://www.vals.ai/benchmarks/swebench)
  - [OpenRouter — Kimi K3 pricing, AA-run benchmark table](https://openrouter.ai/moonshotai/kimi-k3)
  - [IntuitionLabs — Kimi K3 long-context evaluation (1M window verification, MRCR/RULER gap)](https://intuitionlabs.ai/articles/kimi-k3-long-context-evaluation)
  - [Amazon Bedrock — Kimi K3 model card (launch 2026-09-18, Bedrock pricing)](https://docs.aws.amazon.com/bedrock/latest/userguide/model-card-moonshot-ai-kimi-k3.html)
