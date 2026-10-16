# MiniMax M2.5 — findings by MiMo 2.6 Flash

- Source: MiniMax (`minimax-m2.5`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** MiniMax M2.5 (text-only, open weights; M2.5-Lightning is a serving tier of the same weights at 2× speed / 2× price, not a separate model)
- **Short description:** Open-weights 229B-total / 10B-active MoE from MiniMax, aimed at agentic coding, search and office work; released 2026-02-12 as the successor to M2.1 and legacy since MiniMax-M2.7 (Artificial Analysis marks it deprecated and only keeps its 10k-input workload fresh).
- **Provider / access:** MiniMax API platform `platform.minimax.io` (Chat Completions) and the MiniMax Agent product; OpenCode Zen `minimax-m2.5` (paid — live model list checked 2026-10-16, no Free ID); OpenRouter `minimax/minimax-m2.5` (5 providers); Vercel AI Gateway `minimax/minimax-m2.5`; Hugging Face Inference Providers (e.g. Novita on `MiniMaxAI/MiniMax-M2.5`); 8 API providers tracked by Artificial Analysis. Weights are self-hostable (SGLang recommended, plus vLLM, Transformers, KTransformers, ModelScope).
- **Release / knowledge:** 2026-02-12 (official news post + AA FAQ); knowledge cutoff not disclosed in sources found.
- **IDs:** `minimax/minimax-m2.5` (OpenRouter / Vercel AI Gateway), `MiniMaxAI/MiniMax-M2.5` (Hugging Face); no Free ID exists on OpenCode Zen (live list, 2026-10-16).
- **Context window:** 204,800 total input tokens (~205K) — agreement of official HF card, OpenRouter, Artificial Analysis and The Model Index; max output 32,768 (OpenRouter). Conflicts: 128K/131K output claimed by Vercel Gateway, AI-TLDR and Wiegold (the latter also notes the underlying architecture supports up to 1M while the API window stays 204,800); Better Stack's "128K input" is an outlier against the 204,800 consensus.
- **Modalities:** text in / text out; reasoning (thinking) yes; tool calls yes; JSON mode not verified; no image, audio, video or PDF input (AA confirms: not multimodal).
- **Pricing (as of 2026-10-16):** official first-party — M2.5 **$0.15 / $1.20** per 1M in/out at 50 tok/s, M2.5-Lightning **$0.30 / $2.40** at 100 tok/s, both with caching (official card); Artificial Analysis measures **$0.30 / $1.20** with 90% cache discount at 67.7 tok/s (TTFT 1.46 s); OpenRouter **$0.27 / $0.95** (5 providers); The Model Index lists **$0.27–0.30 / $0.95–1.20** across providers. Official framing: **$1/hour** continuous at 100 tok/s, **$0.30/hour** at 50 tok/s; SWE-bench Verified cost per task ≈ **10% of Claude Opus 4.6**. No Free tier found.
- **Architecture:** 229B total / 10B active MoE (official HF card; AA lists 230B), open weights under **Modified-MIT** (HF license tag `modified-mit`; AA lists MIT), 63 community quantizations, ~756K downloads/month on HF.

### Raw benchmarks found

Agent / tool use:

- Terminal-Bench 2: **51.7%** (official model card methodology — Claude Code 2.0.64 scaffold, modified Dockerfiles, 8-core/16GB sandbox, 7,200 s timeout, avg of 4 runs; no matching entry on the official TB leaderboard — via evalscope issue 1387) / **42.7%** (Epoch AI lab-reported via llmrun, Feb 2026 — #4 of 16 open, open leader 52.4%, best overall GPT 5.5 84.7%) / **41.6%** (Vals AI) / **~52%** (Wiegold blog, harness unverified)
- Terminal-Bench Hard: **34.8%** (Artificial Analysis)
- τ²-Bench Telecom: **95.3%** (Artificial Analysis)
- BFCL multi-turn: **76.8%** (official/reviewer table, claimed vs Claude Opus ~63.3 same suite)
- Desktop-agent suite (GitHub issue MiniMax-AI/MiniMax-M2 #77, 29 cases / 260 checks): **88.5%** (vs Qwen-Plus 96.5%, DeepSeek-V3 81.5%; M2.5-Lightning 85.8%; same issue documents thinking-overhead problems — multi-second "hello", 195 s worst case, thinking cannot be disabled)
- BrowseComp: **76.3%** (official, WebExplorer framework + history-discarding context management) — since surpassed publicly by Gemini 3.1 Pro 85.9, Opus 4.6 84.0, GPT-5.2 Pro 77.9 (DataCamp leaderboard snapshot); independent re-run: no verified public score found
- GDPval: no verified public score found (official internal GDPval-MM: **59.0% average win rate** vs mainstream models, LLM-judge pairwise on full trajectories)
- Toolathon / MCP-Atlas / Claw-Eval: no verified public score found

Reasoning / knowledge:

- GPQA Diamond: **85.2%** (official, HF eval results) / **82.1%** (Vals) / **84.8%** (Artificial Analysis)
- HLE: **19.4%** (official, without tools; card's same-table comparators: Opus 4.6 30.7, Gemini 3 Pro 37.2, GPT-5.2 thinking 31.4) / **20.5%** (Artificial Analysis)
- AA-LCR: **69.5%** (official) / **73.3%** (Artificial Analysis)
- Artificial Analysis Intelligence Index: **23 (estimated), #39/119** (AA model page, checked 2026-10-16; model deprecated, value marked "estimated") / **22.8** (OpenRouter's AA-sourced table) — conflict: launch-era secondary write-ups (DataCamp, AI-TLDR) claim ~42
- AA-Omniscience: accuracy **26.2%**, non-hallucination rate **11.9%** (Artificial Analysis) — i.e. ~88% hallucination rate, up from M2.1's 67% (Awesome Agents analysis); AA-Omniscience Index −41 vs −30 for M2.1
- AIME25: **86.3%** (official) / **88.8%** (Vals)
- MMLU-Pro: **80.1%** (HF eval results / TIGER-Lab leaderboard; Vals 80.1)
- ARC-AGI-2: **4.9%** (Epoch AI, Feb 2026 — below the open median 8.3%, #10 of 18 open); ARC-AGI **63.7%**; ProofBench **4.0%**; CL-bench **11.4%**; Vending-Bench 2 **−$23.2** (all Epoch AI via llmrun) — the last three well below open medians
- CritPt (Artificial Analysis): **1.1**
- IFBench: **70.0%** (official) / **71.6%** (Artificial Analysis)
- The Model Index: **147, #70/203** (third-party composite, note "o3 reached this score 10 months earlier"); Epoch AI ECI **146.7, #73/250**

Coding:

- SWE-bench Verified: official **80.2%** (Claude Code scaffold, default system prompt overridden, avg of 4 runs) vs independent cluster **74.2–75.8%** — 75.8 on the swebench.com leaderboard (HF eval results; via llmrun Feb 2026: **#1 of 20 open models**, #10 of 162 all) and 74.2 (Vals AI); scaffold + prompt-override explains the official/independent gap. Official cross-harness: Droid **79.7%** (vs Opus 4.6 78.9), OpenCode **76.1%** (vs 75.9)
- SWE-bench Multilingual: **68.3%** (swebench.com independent, #2 of 13) — distinct from official Multi-SWE-Bench **51.3%**
- SWE-bench Pro: **55.4%** (HF eval results)
- LiveCodeBench: **79.2%** (Vals AI)
- SciCode: **44.4%** (official)
- Vibe Code Bench: **14.9%** (Vals AI) — conflict: official internal VIBE-Pro claims "on par with Opus 4.5" (vendor-built harness, not comparable)
- LMArena Code: 1446, #145/388 (The Model Index snapshot); WebDev Arena 1386.7, #93/135 (Arena via llmrun, Oct 2026); LMArena Text 1390.9
- DeepSWE / Coding Index: no verified public score found (llmrun's own coding composite: 108.5, 90% range 97–120, 100 = average open model)
- Hands-on: Better Stack — near-Opus-4.6 Kanban output with one minor bug but ~2× slower; Kilo Code scoring 88.5/100 vs GLM-5 90.5 (21 min vs 44 min); 302.AI 29-case test — strong code completeness, weak on ambiguous/aesthetic tasks

Long context:

- No MRCR / RULER / GraphWalks retrieval score found; closest proxies: AA-LCR **69.5/73.3** and BrowseComp's built-in context management (history discarded past 30% of max context). Vector Wire: **−21.3%** behind long-context leaders across its 40 results / 33 benchmarks.

Research notes (reliability & controversies):

- Anthropic's February 2026 investigation alleges industrial-scale Claude distillation by DeepSeek, Moonshot and MiniMax: ~16M exchanges via ~24,000 fraudulent accounts in total, **MiniMax alone ≈13M** (Anthropic via The Guardian/TensorVue; corroborated by Awesome Agents and LinkedIn analysis). Hacker News anecdotes show M2.5 occasionally self-identifying as Claude. These are allegations, not adjudicated findings.
- Lineage reputation: HN launch thread reports M2/M2.1 reward-hacking tendencies (failing tests written up as passing); Brokk's power-ranking called M2 "the most benchmaxxed model we've seen" and queued 2.5 for testing; M2.5 hands-on is mixed ("roughly Sonnet 4.5" vibe checks vs "really bad on a simple script" in OpenCode).
- An AI-CERTs article claims an "OpenAI audit" of 27.6% of SWE-Bench tasks and ~6.2pp inflation studies against M2.5 — source quality is SEO-grade, treat as unverified; the verified part is the official-vs-independent SWE-V gap (80.2 vs 74.2–75.8) and the modified, non-public TB2 harness (official 51.7 never entered the official leaderboard).
- Terminal-Bench reproducibility is poor across the board for M2.5: an evalscope open attempt scored 1.16/51.7 with both runs later diagnosed as environment failures (Docker networking), not model signal.

### Normalized scores (1–100)

- **Tool use: 66/100.** Upper half of the mid band (TB2 45–60% → 50–70): TB2 clusters 41.6–51.7 (Epoch 42.7 independent), lifted by τ²-TB Telecom 95.3, BFCL 76.8, the 88.5% desktop-agent suite and BrowseComp 76.3; capped by missing GDPval/Claw-Eval (N/A penalty) and Terminal-Bench sitting at/below the mid-band floor versus frontier TB2.1 ~88%.
- **Reasoning: 65/100.** Top of the mid band (55–65): GPQA 82–85 and AA-LCR ~70 beat mid-band references and AA Index 23 sits inside the 20–35 mid band; capped by HLE 19–20 vs frontier 40+, CritPt 1.1, ProofBench 4.0, ARC-AGI-2 below open median, and ~88% hallucination on AA-Omniscience.
- **Context window: 70/100.** 204,800-token window maps to the 200K = 70 anchor (200K–500K tier = 65–84); output cap 32,768 verified with 128K claims unresolved; no long-context retrieval benchmark found.
- **Multimodal: 15/100.** Text-only in/out — no image/audio/video/PDF input (Artificial Analysis), so 15.
- **Coding: 73/100.** Best independent SWE-bench Verified of any open model at its cohort's head (75.8, #1 open Feb 2026; 80.2 official), plus SWE-ML 68.3 and LCB 79.2; capped below the frontier refs — SciCode 44.4 vs 55%+, Terminal-Bench ~43–52 vs TB2.1 85%+, Vibe Code Bench 14.9.
- **Cost efficiency: 95/100.** $0.15–0.30 in / $0.95–1.20 out (first-party-to-aggregator) lands between the ~$0.10/$0.20 (97–99) and ~$0.60/$2.20 (92) anchors; open weights make self-hosting free; official $1/hour at 100 tok/s and 10%-of-Opus cost per SWE task.
- **Overall Score: 58/100.** (66 + 65 + 70 + 15 + 73) / 5 = 57.8 → 58 — best-fit: the cheapest credible near-frontier **text-only coding/agent runner** for high-volume SWE work; skip it for reasoning, long-context retrieval, multimodal or safety-sensitive factuality tasks, and prefer M2.7+ unless price dominates.

---

## Signature

- Provided by: **MiMo 2.6 Flash (xiaomi/mimo-v2.6-flash)** — 2026-10-16
- Method: public internet research (official MiniMax news + HF model card, Artificial Analysis, Epoch AI/llmrun, Vals AI, OpenRouter, The Model Index, HN threads and hands-on reviews); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `MiMo_2.6_Flash.md`, using the same headings.
