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

- **Tool use: 76/100.** MCP Atlas 73.2%, BrowseComp 83.4% (w/ context management) and SWE-bench Verified 80.6% lead, with Toolathlon Verified 55.9% and GDPval-AA v2 1307 supporting; Terminal-Bench 2.1 64.0%, SWE-bench Pro 55.4% and τ³-Banking 25.8% sit under the frontier bands, and the figures are from the April preview build — the GA 0813 checkpoint's agentic gains are unquantified.
- **Reasoning: 79/100.** HLE 48.2% (w/tools) reaches the 40%+ frontier band, and GPQA Diamond 88.8%, AIME 2026 96.7% and SimpleQA Verified 57.0% support; AA-Omniscience -10.0 and HLE text-only 35.9% cap the score (preview-build figures).
- **Context window: 95/100.** 1M-token window (384K out) with Compressed/Heavily-Compressed Sparse Attention making the full window practical at no extra charge; no ≥98%-at-depth retrieval figure captured, so 100 is not justified.
- **Multimodal: 15/100.** Text-only input and output — the methodology's text-only band (10–20); no vision or audio understanding.
- **Coding: 74/100.** SWE-bench Verified 80.6% (self-reported) and the AA Coding Index of 68.8 lead, with SWE-bench Pro 55.4% supporting; Terminal-Bench 2.1 64.0% is well under the 85% frontier bar, and LiveCodeBench/DeepSWE were not captured (preview-build scores).
- **Cost efficiency: 90/100.** Off-peak $0.66/$1.98 per 1M (blended ~$1.00/M at 3:1; peak $1.32/$3.96, blended ~$1.98/M) sits at/above the ~$1.25/$4.25≈88 anchor off-peak and near it at peak; cache reads at 3.3% of input ($0.022–0.044/M) and MIT weights to self-host are exceptional offsets, while the peak-hour windows double the rate.
- **Overall Score: 68/100.** (76+79+95+15+74)/5 = 67.8 → 68 — strong reasoning (HLE 48.2% w/tools, GPQA 88.8%) and agentic scores (MCP Atlas 73.2%, BrowseComp 83.4%, SWE-bench Verified 80.6%) with a 1M window at $0.66–1.32/$1.98–3.96, dragged below its capability tier by the methodology's text-only multimodal band (15/100); the four non-multimodal dimensions average 81.

---

## Signature

- Provided by: **Ling 3.1 Flash (opencode/ling-3.1-flash-free)** — 2026-10-02
- Method: public internet research (DeepSeek API docs + pricing page, V4 preview release notes, Vercel AI Gateway, devtk, DeepSeek V4 guide, the Inkling launch comparison table); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `DeepSeek_V4_Pro.md`, using the same headings.
