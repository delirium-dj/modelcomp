# DeepSeek V4 Pro — findings by Ling 3.1 Flash

- Source: DeepSeek (`opencode/deepseek-v4-pro`; API `deepseek-v4-pro` serving checkpoint `DeepSeek-V4-Pro-0813`; api.deepseek.com, OpenAI- and Anthropic-compatible; also Vertex-style gateways, Baseten, Fireworks, Novita, DeepInfra)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** DeepSeek V4 Pro
- **Short description:** DeepSeek's GA flagship (2026-08-13, `0813` checkpoint; preview 2026-04-24) — a 1.6T-total/49B-active MIT-licensed MoE with 1M native context and 384K max output — scoring HLE 48.2% (w/tools), GPQA Diamond 88.8%, AIME 2026 96.7%, SWE-bench Verified 80.6%, MCP Atlas 73.2% and BrowseComp 83.4% (preview-build figures) at off-peak $0.66/$1.98 per 1M; **text-only**.
- **Provider / access:** DeepSeek API (thinking mode default, non-thinking available; OpenAI Chat Completions and Anthropic formats), chat.deepseek.com (Expert/Instant Mode), third-party gateways; MIT open weights (self-hostable; official 8-GPU vLLM recipe, 4×80GB realistic minimum per third parties).
- **Release / knowledge:** preview 2026-04-24; GA 2026-08-13 (`DeepSeek-V4-Pro-0813`); knowledge cutoff not captured.
- **IDs:** `opencode/deepseek-v4-pro` / `deepseek-v4-pro` / `DeepSeek-V4-Pro-0813`. NOTE: the repo `meta.json` is stale on context ("128K total") and pricing ("Standard pricing"); the model has a 1M-token window (384K out) and now uses peak/off-peak pricing. Its "Text in/out" modality note is accurate — this is a text-only model.
- **Context window:** 1,000,000 tokens in (native default across DeepSeek services, no extra charge); 384,000 max out.
- **Modalities:** text in; text out (no vision or audio).
- **Pricing (as of 2026-10-02):** peak hours (01:00–04:00 and 06:00–10:00 UTC): $1.32 cache-miss input / $0.044 cached input / $3.96 output per 1M; off-peak (all other hours): $0.66 / $0.022 / $1.98 — cache reads at 3.3% of input; thinking-mode reasoning tokens bill at the output price; concurrency limit 500; AA blended ~$0.99/M (off-peak, 7:2:1).
- **Architecture:** 1.6T-total/49B-active MoE; Compressed Sparse Attention + Heavily Compressed Attention (cut per-token inference compute and KV cache at the million-token setting); FP4+FP8 mixed precision; recommended sampling temperature 1.0, top_p 1.0.

### Raw benchmarks found

All scores below are from the April 2026 preview build (captured via the Inkling launch comparison table, 2026-07-15, where DeepSeek reported its own numbers); the GA `0813` checkpoint is described as having "greatly enhanced agentic capabilities" without published figures.

Reasoning / knowledge:

- Humanity's Last Exam: **48.2%** with tools / **35.9%** text-only
- GPQA Diamond: **88.8%**; AIME 2026: **96.7%**
- SimpleQA Verified: **57.0%**; AA-Omniscience: **-10.0** (weak)
- IFBench: **76.5%**; Global-MMLU-Lite: **89.3%**
- New rows (LLMLearNER, 0813 max unless noted): HMMT Feb 2026 **93.9%** (#6 of 11), IMO-AnswerBench **89.8%** (#5 of 18), MathArena Apex **65.3%** (#6 of 15), FrontierMath v2 **45.3%** (#49 of 75), ProofBench v1.1 (Lean 4) **50.0%** (#17 of 28), SciCode **50.8%** (#38 of 89), CritPt **12.9%** (#39 of 125), GDP.pdf **13.4%**, FrontierMath Tier-4 v2 **2.4%** (#56 of 63), Terminal-Bench-Science 0.1 **3.8%** (#27 of 29), ECI **155**
- GPQA Diamond effort ladder (vendor): Normal (no tools) **72.9%** / High **89.1%** / Max **90.1%** — the LLMLearNER "GPQA Diamond Normal" read of 72.9% is the no-tools/Normal setting, not a conflict with the Max figures

Agentic / tool use:

- MCP Atlas: **73.2%**; Toolathlon Verified: **55.9%**; τ³-Banking: **25.8%**
- BrowseComp (w/ context management): **83.4%**
- GDPval-AA v2: **1307 Elo**
- SWE-bench Verified: **80.6%** (self-reported, 0423 HF card) — four reads now on file: vals.ai **96.4%** (0813, bash-only harness, independent), NIST CAISI **74.0%** (independent — a 6.6-point gap vs the vendor claim; NIST: V4 "lags behind the frontier by about 8 months" in aggregate), and 77.4% (Vals, April-preview build per deepseekv4.net) — the spread is harness- and checkpoint-dependent
- SWE-bench Pro Public: **55.4%**; SWE-bench Multilingual: **76.2%** (#15 of 30); **Vibe Code Bench v1.1: 82.3%** (LLMLearNER, max with tools, #15 of 63) vs the 49.93 on file (source unlabeled) — unresolved conflict, both kept and flagged
- Terminal-Bench 2.1: **64.0%**
- AA Coding Index: **68.8** (Command Code, pinned latest); AA Intelligence Index: **53.2** (Command Code, pinned latest) — AA's own page reads the 0813 (max) at **36** (median 18 for comparable open-weight models; 160M Index tokens, "somewhat verbose"; $0.67 per task) — the 53.2→36 spread is pinning/harness-dependent, not a regression
- New caps (LLMLearNER, 0813 max unless noted): Terminal-Bench 4.0 **14.1%** (#32 of 60; AA's non-reasoning read: 1.5%), APEX-SWE **33.8%** (#46 of 61), τ³-Banking **30.1%** (LLMLearNER read; the vendor's 25.8% stands), LiveBench agentic coding **54.95** (computed from LiveBench's own table — last of seven frontier peers; Opus 5 leads at 65.20), Code Migration **41.5%** (#23 of 47), FrontierSWE v1 **24.6%** (#14 of 17), IOI (Vals v2) **51.6%** (#20 of 29), Terminal-Bench Hard **46.2%** (#18 of 150)

Long context / multimodal:

- 1M native context with sparse attention; AA-LCR (independent): **80.3%** (0813 max, LLMLearNER) / **74.7%** (0424 max, AA via OpenRouter) / **70.3%** (0424 high) / **50.7%** (0813 non-reasoning); vendor MRCR **83.5%** / CorpusQA **62.0%** at 1M
- Hands-on caveat (mejba, 2026-04-25, 340K-token codebase dump): accurate for the first ~150K tokens, confabulating by the end — "a reliable working ceiling of roughly 128K tokens in real codebase tests before confabulation starts"; the 1M window is real but depth-quality is the constraint
- No vision/audio benchmarks — text-only model

### Normalized scores (1–100)

- **Tool use: 79/100.** GA 0813 checkpoint: Terminal-Bench 2.1 **78.7%** (AA's own harness — independent; vendor claims 87.9%, vals.ai's archived Terminus 2 run reads 54.68%), Toolathlon-Verified **74.4%** (Toolathlon's own board run, 2026-10-03 — independent, replaces the vendor's 74.1%), CyberGym 83.3% and AutomationBench 31.8% (vendor), SWE-bench Verified 96.4% (vals.ai, saturated), BrowseComp 83.4% (w/ context management); SWE-bench Pro 55.4%, τ³-Banking 25.8–30.1%, Terminal-Bench 4.0 14.1%, LiveBench agentic coding 54.95 (last of seven frontier peers) and APEX-SWE 33.8% sit under the frontier bands. April-preview figures (TB 2.1 64.0%, Toolathlon 55.9%) are superseded.
- **Reasoning: 81/100.** GA 0813: GPQA Diamond **92.4%** (vals.ai, independent — clears the 90%+ band; vendor card reads 90.1–92.8%), HLE **41.0%** no-tools (AA, independent — just clears the 40%+ band; the 60.0% with-tools figure is vendor self-reported), AIME 2026 96.7%, HMMT 93.9%, IMO-AnswerBench 89.8%, MathArena Apex 65.3%, FrontierMath v2 45.3%, LiveBench 77.4 and ARC-AGI-2 61.3% (independent); AA-Omniscience -10.0 (weak), CritPt 12.9%, GDP.pdf 13.4%, FrontierMath T4 2.4%, the AA Intelligence Index of 36 (0813 max; 53.2 on the pinned Command Code read) and the unverified tool-augmented HLE cap the score.
- **Context window: 95/100.** 1M-token window (384K out) with Compressed/Heavily-Compressed Sparse Attention making the full window practical at no extra charge; independent AA-LCR reads 74.7–80.3% (max effort) and vendor MRCR 83.5% at depth support, but no independent ≥98%-at-512K+ retrieval figure, so 100 is not justified — and a 340K-token hands-on test found confabulation past ~200K (practical ceiling ~128K in real codebase tests).
- **Multimodal: 15/100.** Text-only input and output — the methodology's text-only band (10–20); no vision or audio understanding.
- **Coding: 77/100.** GA 0813: LiveCodeBench **87.5%** (vals.ai, independent, rank 11/138 — vendor claims 93.5% Pass@1-CoT), SWE-bench Verified 96.4% (vals.ai, rank 2/83, saturated; NIST CAISI's independent read is 74.0%), AA Coding Index 68.8, DeepSWE 62.7% and SWE-bench Pro 55.4% (vendor self-reported); Vibe Code Bench reads 82.3% (LLMLearNER max, #15 of 63) vs 49.93 (unlabeled source) — conflict flagged; Codeforces 3206, NL2Repo 61.5%, SWE-bench Multilingual 76.2% and FrontierMath v2 45.3% support, while LiveBench agentic coding 54.95, APEX-SWE 33.8%, FrontierSWE 24.6% and TB Hard 46.2% cap.
- **Cost efficiency: 90/100.** Off-peak $0.66/$1.98 per 1M (blended ~$1.00/M at 3:1; peak $1.32/$3.96, blended ~$1.98/M) sits at/above the ~$1.25/$4.25≈88 anchor off-peak and near it at peak; cache reads at 3.3% of input ($0.022–0.044/M) and MIT weights to self-host are exceptional offsets, while the peak-hour windows double the rate.
- **Overall Score: 69/100.** (79+81+95+15+77)/5 = 69.4 → 69 — the GA 0813 checkpoint quantifies the agentic leap (independent TB 2.1 78.7%, Toolathlon 74.4%, LiveCodeBench 87.5%, GPQA 92.4%) with a 1M window at $0.66–1.32/$1.98–3.96, still dragged by the text-only multimodal band (15/100); the four non-multimodal dimensions average 83.

---

## Update 2026-10-08 (6-day re-research)

Full GA `0813` checkpoint scorecard found (the report previously noted the GA agentic gains were unquantified). Vendor-reported (HF/0813 model cards, unreleased DeepSeek Harness) unless marked independent:

- Terminal-Bench 2.1 **87.9%** (preview 72.1%, +15.8) — but **independent: AA's own harness 78.7%** (2026-08-17, 9.2pp under the vendor claim; tbench.ai's public board carries no DeepSeek entry; vals.ai's archived Terminus 2 table reads 54.68%)
- **Toolathlon-Verified 74.4%** ±1.2 (toolathlon.xyz's own board run, 2026-10-03 — **independent**, replaces the vendor's 74.1%)
- DeepSWE **62.7%** (preview 12.8%, +49.9 — self-reported); CyberGym **83.3%** (+30.6); AutomationBench **31.8%** (+19.0); NL2Repo 61.5% (+23.0); DSBench-FullStack 71.1% / DSBench-Hard 67.2%; Agents' Last Exam 25.7% (self-reported)
- HLE **42.7%** no-tools / **60.0%** with tools (preview 48.2% max) — AA's independent no-tools run: **41.0%** (2026-08-17)
- GPQA Diamond **90.1%** (HF model card; vendor table also reads 92.8) — **independent: vals.ai 92.4%** (2026-08-17)
- LiveCodeBench **93.5%** Pass@1-CoT (vendor, "best verified in BenchLM's catalog") — **independent: vals.ai 87.5%** (rank 11/138, 2026-08-15; distinct from base DeepSeek V4 at 87.48%)
- SWE-bench Verified **96.4%** (vals.ai, rank 2/83, 482/500 resolved, bash-only harness — **independent**; vendor's own run reads 80.6%); SWE-bench Pro 55.4%; SWE-bench Multilingual 76.2%
- ARC-AGI-2 **61.3%** (arcprize.org, 2026-08-24 — independent); LiveBench **77.4** (2026-08-24 — independent); Codeforces rating 3206; HMMT 2026 Feb 95.2%; IMOAnswerBench 88.8%; MMLU-Pro 87.5%; TB 2.0 67.9%; MRCR 83.5% / CorpusQA 62.0% (vendor long-context rows)
- AA: Intelligence Index 53.2, Coding Index 68.8, Agentic Index 49.6; Vals Index 52.37% (rank 18/46); Vibe Code Bench 49.93
- Architecture (SemiAnalysis/InferenceX, arXiv:2606.19348): CSA + HCA hybrid attention, Manifold-Constrained Hyper-Connections (mHC), Muon optimizer, pre-trained on >32T tokens; 1M-token setting needs 27% of single-token inference FLOPs and 10% of the KV cache of DeepSeek-V3.2; the 0813 checkpoint adds a DSpark speculative-decoding module and reports 1.7T params
- Caveats: no system card published for 0813; GA weights not yet on Hugging Face; LMSYS + Ant Group's H20 serving stack (271 output tok/s at batch size 1, 2026-08-19) is self-reported
- **Scores revised** (see Normalized scores): Tool 76→79, Reasoning 79→81, Coding 74→77, Overall 68→69 on the independent GA-checkpoint evidence

---

## Update 2026-10-11 (deep second pass, 3 independent searches)

**No score changes** — Tool 79 / Reasoning 81 / Context 95 / Multimodal 15 / Coding 77 / Cost 90, Overall stays 69. The pass filled the long-context retrieval gap (independent AA-LCR reads), surfaced a second independent SWE-bench Verified evaluation (NIST CAISI), and documented the effort-ladder spreads; every new row corroborates the existing bands:

- **AA Intelligence Index (0813 max, AA's own page): 36** (median 18 for comparable open-weight models; 160M Index tokens, "somewhat verbose"; 84.7 tok/s vs the 65.8 median; TTFT 1.65s; $1.32/$3.96, blended $0.69/M; $0.67 per task) — vs the 53.2 on file (Command Code, pinned): the spread is pinning/harness-dependent, both kept. 0424 preview reads: High 30.1 (Coding 58.7), Max 30.4 (Coding 59.4, Agentic 26.3); non-reasoning 20.4–20.8.
- **Long-context retrieval (the file's gap) — independent AA-LCR:** 80.3% (0813 max, LLMLearNER) / 74.7% (0424 max, AA) / 70.3% (0424 high) / 50.7% (0813 non-reasoning); vendor MRCR 83.5% / CorpusQA 62.0% at 1M. Hands-on caveat (mejba, 340K-token codebase dump): accurate for the first ~150K tokens, confabulating by the end — "a reliable working ceiling of roughly 128K tokens in real codebase tests before confabulation starts."
- **SWE-bench Verified now has four reads:** vendor 80.6% (0423 HF card), vals.ai 96.4% (0813, bash-only harness — the file's anchor), **NIST CAISI 74.0%** (independent — a 6.6-point gap vs the vendor claim; NIST: V4's capabilities "lag behind the frontier by about 8 months" in aggregate), and 77.4% (Vals, April-preview build). The spread is harness- and checkpoint-dependent.
- **New reasoning rows (LLMLearNER, 0813 max unless noted):** HMMT Feb 2026 93.9% (#6 of 11), IMO-AnswerBench 89.8% (#5 of 18), MathArena Apex 65.3% (#6 of 15), FrontierMath v2 45.3% (#49 of 75), ProofBench v1.1 (Lean 4) 50.0% (#17 of 28), SciCode 50.8% (#38 of 89), ECI 155 — supports; CritPt 12.9% (#39 of 125), GDP.pdf 13.4%, FrontierMath Tier-4 v2 2.4% (#56 of 63), Terminal-Bench-Science 0.1 3.8% (#27 of 29) — caps. GPQA Diamond effort ladder (vendor): Normal 72.9% / High 89.1% / Max 90.1% (the LLMLearNER "GPQA Normal" 72.9% is the no-tools setting, not a conflict).
- **New agentic caps (0813 max):** Terminal-Bench 4.0 14.1% (#32 of 60; AA's non-reasoning read: 1.5%), APEX-SWE 33.8% (#46 of 61), τ³-Banking 30.1% (LLMLearNER; the vendor's 25.8% stands), LiveBench agentic coding 54.95 (computed from LiveBench's own table — last of seven frontier peers, Opus 5 leads at 65.20), Code Migration 41.5%, FrontierSWE v1 24.6%, IOI (Vals v2) 51.6%, Terminal-Bench Hard 46.2%.
- **Vibe Code Bench conflict:** LLMLearNER reads v1.1 at **82.3%** (max with tools, #15 of 63) vs the 49.93 on file (source unlabeled) — unresolved; both kept and flagged. NL2Repo: the GA 61.5% (vendor) vs LLMLearNER's 38.5% is a preview-build read (preview 38.5 → GA 61.5 per the 0813 changelog), not a conflict.
- **Serving/ops (saas.pet, 141 days of daily production use, independent, 4.5/5):** the 14 September retirement was called off — "in response to user demand, we have decided to continue providing API services for DeepSeek V4 Pro after September 14, 2026"; V4 Flash and V4 Flash Vision Exp are gone (legacy names route to V4.1-Flash at Flash prices); V4 Pro still served as DeepSeek-V4-Pro-0813 (concurrency 500 vs Flash's 2500). NIST safety findings (via danilchenko): earlier DeepSeek models responded to 94% of malicious jailbreak attempts (vs 8% for US models) and were 12× more susceptible to agent hijacking; V4's technical documentation contains no reference to safety measures, red-teaming or risk evaluations. Verbosity runs ~4.5× more output tokens per task, narrowing the effective cost advantage to ~1.5–2×. Community-reported failure modes (bitsnotes): confident hallucination, mid-response vocabulary drift and structural pattern collapse on repetitive delimiters; an unverified community claim that V4 is distilled from Claude/Codex outputs.
- **Comparison context (thevibeworks launch table):** V4-Pro 0813 is within a point of Fable 5 on Terminal-Bench 2.1 (87.9 vs 88.0) and CyberGym (83.3 vs 83.1), ahead of Opus 4.8 on TB/DeepSWE/CyberGym/AutomationBench, behind Kimi K3 on TB/DeepSWE/Toolathlon/DSBench-Hard — "in the cluster, not clear of it." The successor V4.1 Flash (2026-09-10) scores above V4-Pro-0813 on most shared rows (TB 2.1 90.6, CyberGym 88.1, DeepSWE v1.1 74.2, GPQA 90.9) at ~1/4 the input price and with image input.
- Still open: an independent TB 2.1 submission to tbench.ai's public board (none exists), BFCL, MCP-Atlas under a neutral harness, and the final Vibe Code Bench figure.
- Score impact: none — the new independent rows (AA-LCR 74.7–80.3%, NIST SWE-bench 74.0%, AA Index 36) corroborate Tool 79 / Reasoning 81 / Context 95 / Coding 77; Overall stays (79+81+95+15+77)/5 = 69.4 → 69.

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08, 2026-10-11)
- Method: public internet research (DeepSeek API docs + pricing page, V4 preview release notes, Vercel AI Gateway, devtk, DeepSeek V4 guide, the Inkling launch comparison table, HF model cards, Artificial Analysis, LLMLearNER, OpenRouter, NIST CAISI via danilchenko, saas.pet, mejba, glbgpt, HokAI, thevibeworks, SemiAnalysis InferenceX); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Pro.md`, using the same headings.
