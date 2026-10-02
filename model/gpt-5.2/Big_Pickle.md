# GPT 5.2 — findings by Big Pickle

- Source: OpenAI (`opencode/gpt-5.2`, API model `gpt-5.2` = GPT-5.2 Thinking)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT 5.2 (Thinking tier, API ID `gpt-5.2`)
- **Short description:** OpenAI's December 2025 flagship family (Instant / Thinking / Pro) aimed at professional knowledge work, enterprise coding and complex reasoning. The Thinking tier is the one tracked here; GPT-5.2 Instant (`gpt-5.2-chat-latest`) and GPT-5.2 Pro are separate SKUs. Internally codenamed "Garlic", it introduced a 400K context, a state-of-the-art SWE-bench Pro score and a large ARC-AGI-2 jump.
- **Provider / access:** OpenAI API `gpt-5.2` in the Responses API and Chat Completions API; ChatGPT Plus/Pro/Go/Business/Enterprise; OpenCode Zen `opencode/gpt-5.2`. Compatible with the Responses `/compact` endpoint, which extends effective context for long tool-heavy runs.
- **Release / knowledge:** released 2025-12-11; knowledge cutoff 2025-08-31.
- **IDs:** `opencode/gpt-5.2` (Zen, standard pricing); upstream `gpt-5.2` (Thinking), `gpt-5.2-chat-latest` (Instant), `gpt-5.2-pro` (Pro).
- **Context window:** 400,000 tokens, 128,000 max output (OpenAI API docs); the Instant tier is listed at 128K on some gateways.
- **Modalities:** text and image input; text output; reasoning effort with a new fifth tier `xhigh`; tool calls; structured outputs.
- **Pricing (as of 2026-10-02):** $1.75 in / $14.00 out per 1M; cached input $0.175 (90% discount); batch $0.875 / $7.00. GPT-5.2 Pro separately at $21 / $168.
- **Architecture:** proprietary; three-tier Instant/Thinking/Pro deployment of one generation, weights not published.

### Raw benchmarks found

Agent / tool use:

- GDPval (wins or ties): **70.9%**; GDPval (no ties) ~**49.x%** (OpenAI launch table)
- Toolathlon: **46.3%**; MCP Atlas: **60.6%**
- tau-bench Retail: **82%**; tau2-bench Telecom: **98.7%**
- FinanceAgent v1.1: **58.5%**; CorpFin v2: **65.9%**; SWE-Lancer IC Diamond: **74.6%** (#3 on llmboard)
- APEX-Agents: **34.4%**; OSWorld: **39.2%**
- Terminal-Bench: **64.9%**; Terminal-Bench 2.0: **51.7%**
- BrowseComp: **65.8%**; DeepResearch Bench: **41.1%**
- GDPval-AA Elo: no independent row found for this tier

Reasoning / knowledge:

- GPQA Diamond (no tools): **92.4%** (Pro variant 93.2%); third-party trackers variously report 91.4% (Model Beat) and 73.2% on a different GPQA-Diamond subset
- HLE (no tools): **34.5%**; HLE (w/ search, Python): **45.5%**; ARMES lists 37.7% on its own harness
- AIME 2025 (no tools): **100.0%**; HMMT Feb 2025 (no tools): **99.4%**
- FrontierMath Tier 1–3: **40.3%**; FrontierMath Tier 4: **14.6%** (ARMES reports 18.8% on its run)
- ARC-AGI-1 Verified: **86.2%**; ARC-AGI-2 Verified: **52.9%**
- MMLU: **89.6%**; MMLU-Pro: **86.2%** (Epoch AI 87.4%); MedQA 94.1%
- SimpleQA: **35.4%**; SimpleBench: **45.8%**

Coding:

- SWE-bench Pro (public): **55.6%** (state of the art at launch; third-party tracker lists 79.9% on a different Pro variant)
- SWE-bench Verified: **80.0%** claimed; **75.40%** on Vals.ai's independent run
- LiveCodeBench: **85.4%** (Epoch AI 88.9%); LiveBench: **74.8%**
- Arena Code Elo: **1418**; Vibe Code Bench: **53.5%**; MedCode 49.8%; IOI 54.8%

Long context:

- OpenAI MRCR v2 8-needle: 4K–8K **98.2%**, 8K–16K 89.3%, 16K–32K 95.3%, 32K–64K 92.0%, 64K–128K 85.6%, 128K–256K **77.0%** (OpenAI launch table; no bands published above 256K)
- BrowseComp Long Context: 128k **92.0%**, 256k **89.8%**
- GraphWalks: BFS <128k **94.0%**, parents <128k **89.0%**

### Normalized scores (1–100)

- **Tool use: 76/100.** GDPval 70.9%, tau-bench Retail 82%, tau2-bench Telecom 98.7%, SWE-Lancer 74.6% and Terminal-Bench 64.9% show a solid business-workflow tool loop; capped by Toolathlon 46.3%, MCP Atlas 60.6%, APEX-Agents 34.4% and OSWorld 39.2%, all far below the 2026 frontier entries.
- **Reasoning: 78/100.** GPQA Diamond 92.4%, AIME 2025 100% and HMMT 99.4% are elite on competition and graduate science, with ARC-AGI-2 52.9% marking a real abstract-reasoning jump; capped by HLE 34.5% no-tools / 45.5% with search, FrontierMath Tier 4 14.6% and SimpleQA 35.4%.
- **Context window: 82/100.** A verified 400,000-token window with a 128,000-token output ceiling and measured long-context behavior (MRCR 8-needle 77.0% at 128K–256K, GraphWalks BFS 94.0% and parents 89.0% under 128K, BrowseComp Long Context 92.0%/89.8% at 128k/256k) — solid and well measured, but the window and the highest published retrieval band both stop well short of the 1M-class entries.
- **Multimodal: 80/100.** Image input with measured vision results — MMMU-Pro 79.5%, VideoMMMU 85.9%, CharXiv-R 82.1%, ScreenSpot-Pro 86.3%, Arena Vision Elo 1244 — with no audio or native video ingestion documented.
- **Coding: 84/100.** SWE-bench Pro 55.6% was state of the art at launch on the contamination-resistant four-language benchmark, SWE-bench Verified 80.0% claimed (75.4% independently), LiveCodeBench 85.4% and SWE-Lancer IC Diamond 74.6%; capped by Vibe Code Bench 53.5% and the 2025-vintage ceiling relative to later models.
- **Cost efficiency: 72/100.** $1.75/$14 per 1M with a 90% cached-input discount ($0.175) and half-price batch — reasonable for a frontier reasoning model, but 2.3× Gemini 3.8 Flash's introductory output rate and with no free tier.
- **Overall Score: 80.0/100.** Half-up mean of the five quality dims. Best fit as an enterprise professional-work and multi-language code-fixing model on a 400K budget; superseded on raw capability by the GPT-5.5/5.6 line at similar or better token economics.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-10-02
- Method: public internet research (OpenAI GPT-5.2 launch page and API model docs, Vals.ai, Epoch AI figures via Model Beat, llmboard.ai, AnotherWrapper pricing table, ARMES docs); scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.6_Terra.md`, using the same headings.

---