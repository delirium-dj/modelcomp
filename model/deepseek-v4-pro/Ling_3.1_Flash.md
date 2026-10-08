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

Agentic / tool use:

- MCP Atlas: **73.2%**; Toolathlon Verified: **55.9%**; τ³-Banking: **25.8%**
- BrowseComp (w/ context management): **83.4%**
- GDPval-AA v2: **1307 Elo**
- SWE-bench Verified: **80.6%** (self-reported); SWE-bench Pro Public: **55.4%**
- Terminal-Bench 2.1: **64.0%**
- AA Coding Index: **68.8** (Command Code, pinned latest); AA Intelligence Index: **53.2** (Command Code, pinned latest)

Long context / multimodal:

- 1M native context with sparse attention; no MRCR/RULER/AA-LCR figure captured
- No vision/audio benchmarks — text-only model

### Normalized scores (1–100)

- **Tool use: 79/100.** GA 0813 checkpoint: Terminal-Bench 2.1 **78.7%** (AA's own harness — independent; vendor claims 87.9%, vals.ai's archived Terminus 2 run reads 54.68%), Toolathlon-Verified **74.4%** (Toolathlon's own board run, 2026-10-03 — independent, replaces the vendor's 74.1%), CyberGym 83.3% and AutomationBench 31.8% (vendor), SWE-bench Verified 96.4% (vals.ai, saturated), BrowseComp 83.4% (w/ context management); SWE-bench Pro 55.4% and τ³-Banking 25.8% sit under the frontier bands. April-preview figures (TB 2.1 64.0%, Toolathlon 55.9%) are superseded.
- **Reasoning: 81/100.** GA 0813: GPQA Diamond **92.4%** (vals.ai, independent — clears the 90%+ band; vendor card reads 90.1–92.8%), HLE **41.0%** no-tools (AA, independent — just clears the 40%+ band; the 60.0% with-tools figure is vendor self-reported), AIME 2026 96.7%, LiveBench 77.4 and ARC-AGI-2 61.3% (independent); AA-Omniscience -10.0 (weak) and the unverified tool-augmented HLE cap the score.
- **Context window: 95/100.** 1M-token window (384K out) with Compressed/Heavily-Compressed Sparse Attention making the full window practical at no extra charge; vendor-reported MRCR 83.5% at depth, but no independent ≥98%-at-512K+ retrieval figure, so 100 is not justified.
- **Multimodal: 15/100.** Text-only input and output — the methodology's text-only band (10–20); no vision or audio understanding.
- **Coding: 77/100.** GA 0813: LiveCodeBench **87.5%** (vals.ai, independent, rank 11/138 — vendor claims 93.5% Pass@1-CoT), SWE-bench Verified 96.4% (vals.ai, rank 2/83, saturated), AA Coding Index 68.8, DeepSWE 62.7% and SWE-bench Pro 55.4% (vendor self-reported), Vibe Code Bench 49.93; Codeforces 3206 and NL2Repo 61.5% (vendor) support.
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

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02 (updated 2026-10-08)
- Method: public internet research (DeepSeek API docs + pricing page, V4 preview release notes, Vercel AI Gateway, devtk, DeepSeek V4 guide, the Inkling launch comparison table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Pro.md`, using the same headings.
