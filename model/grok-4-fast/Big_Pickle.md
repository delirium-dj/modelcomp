# Grok 4 Fast — findings by Big Pickle

- Source: xAI `grok-4-fast` (reasoning variant; `grok-4-fast-non-reasoning` is the same weights with reasoning off)
- Date: 2026-09-26 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Grok 4 Fast (SpaceXAI / xAI; not a Free-tier model)
- **Short description:** xAI's cost-efficiency breakthrough, released 2025-09-19: a single set of weights that blends reasoning and non-reasoning modes, ships a 2M-token context window, and costs roughly a fifteenth of Grok 4 per token. It targets high-volume production workloads — grounded search, long-document work, cheap routing — rather than top-of-leaderboard quality. **Now deprecated**: xAI retired it on 2026-05-15 in favour of Grok 4.1 Fast.
- **Provider / access:** xAI API. Model name `grok-4-fast-reasoning`, aliases `grok-4-fast`, `grok-4-fast-reasoning-latest`; the non-reasoning sibling is `grok-4-fast-non-reasoning` (aliases `grok-4-fast-non-reasoning-latest`). Both are standard OpenAI-compatible **Chat Completions** models on the `us-east-1` / `eu-west-1` clusters. Rate limits 607 RPM / 4M TPM (reasoning) and 480 RPM (non-reasoning). Batch API supported. **Higher context pricing applies above the 128K prompt length** — the base rate is not the whole bill on long-context work. Also served on Azure AI Foundry and Oracle Cloud (OCI).
- **Release / knowledge:** Released 2025-09-19 (xAI launch post and model card). **Knowledge cutoff is not disclosed** in the xAI model card; third-party trackers list 2025-06 / 2025-09 with low confidence, so treat any cutoff claim here as unverified.
- **IDs:** `grok-4-fast-reasoning` (default for the `grok-4-fast` alias) and `grok-4-fast-non-reasoning`. No OpenCode Zen Free ID — paid xAI model.
- **Context window:** **2,000,000 tokens / 30,000 max output** (xAI model docs; corroborated by Artificial Analysis, which lists 2M ≈ 3,000 A4 pages). Caveat: retrieval quality above 128K is unmeasured — xAI charges a higher rate past that point precisely because it is expensive to serve, not because it is better at long-context reasoning.
- **Modalities:** In: text, **image**. Out: text. Reasoning: yes (a distinct non-reasoning variant also exists). Tool calls: yes (function calling, structured outputs, native web search and X search; live search billed separately at $25 / 1K sources). Prompt caching: yes ($0.05/1M cached input). PDF input: not documented.
- **Pricing (as of 2026-09-26):** **$0.20 in / $0.50 out per 1M tokens**, cached input **$0.05**. Live search $25.00 per 1,000 sources. Cheapest configuration in the whole comparison set alongside Grok 4.1 Fast; no free tier.
- **Architecture:** Proprietary; parameter count not disclosed. Unified reasoning/non-reasoning architecture — xAI reports ~40% fewer thinking tokens than Grok 4 at comparable accuracy, which is the entire point of the model.

### Raw benchmarks found

Agent / tool use:

- BrowseComp (xAI launch, native search + X search): **44.9%** pass@1 (Grok 4: 43.0%)
- SimpleQA (xAI launch, native search): **95.0%** pass@1 (Grok 4: 94.0%, Grok 3 no-reasoning: 82.0%)
- AgentDojo prompt-injection robustness (xAI model card, 2025-09-19): 0.00 attack success rate on user jailbreaks and 0.00/0.01 on system jailbreaks (reasoning / non-reasoning) — measured but reported as a rate, not a pass score
- Terminal-Bench 2.1 / 4.0: **no standalone public score found** (it contributes to the AA Intelligence Index composite only)
- Tau3-Banking / Tau2-Bench: **no standalone public score found**
- GDPval-AA: **no verified public score found**
- Claw-Eval / ClawProBench: **no verified public score found**
- Toolathon / MCP-Atlas / SWE Atlas Codebase QnA: **no verified public score found**

Reasoning / knowledge:

- Artificial Analysis Intelligence Index (Grok 4 Fast **Reasoning**): **28**, #49/178 in class (current v4.3.2). Non-reasoning variant: **11**, #23/75. Both marked *estimated* by AA; the model is deprecated and only the default 10K-input workload is still tracked
- GPQA Diamond (xAI launch, pass@1): **85.7%** (Grok 4 87.5%, Grok 3 Mini High 79.0%, GPT-5 High 85.7%, GPT-5 Mini High 82.3%)
- AIME 2025, no tools: **92.0%** (Grok 4 91.7%, GPT-5 High 94.6%, Grok 3 Mini High 83.0%)
- HMMT 2025, no tools: **93.3%** (Grok 4 90.0%, GPT-5 High 93.3%, Grok 3 Mini High 74.0%)
- HLE, no tools: **20.0%** (Grok 4 25.4%, GPT-5 High 24.8%, Grok 3 Mini High 11.0%) — a clear weak spot
- LCR / MLCR: **no verified public score found**
- CritPt: **no verified public score found**
- Omniscience Accuracy / Hallucination Rate: **no AA-Omniscience score published**; the xAI model card instead reports a **MASK dishonesty rate of 0.47** (reasoning) / 0.63 (non-reasoning), and 0.21 / 0.54 when a "respond truthfully" instruction is appended, plus a **sycophancy rate of 0.10 / 0.13**
- BenchLM overall: **no public overall score found** (model deprecated)

Coding:

- LiveCodeBench, Jan–May 2025 slice (xAI launch, pass@1): **80.0%** (Grok 4 79.0%, GPT-5 High 86.8%, Grok 3 Mini High 70.0%)
- SWE-bench Verified / SWE-Pro: **no verified public score found**
- SciCode / AA-SciCode: **no verified public score found**
- Vibe Code Bench: **no verified public score found**
- DeepSWE / Coding Index: **no standalone public score found** (contributes to the AA composite only)

Long context:

- 2M-token window is a documented spec (xAI model docs), but **no long-context retrieval result reported** — no MRCR, RULER or GraphWalks value at any window length. xAI bills a premium above 128K prompt tokens, which is a cost signal, not a quality signal.

### Normalized scores (1–100)

- **Tool use: 72/100.** Best evidence is search-grounded: BrowseComp 44.9% is a genuinely hard agentic-retrieval benchmark, and SimpleQA 95.0% shows the grounding is reliable, backed by native web + X search, function calling and structured outputs, plus a clean 0.00 AgentDojo injection result. Held well below the 90–100 band because the model publishes **no** Terminal-Bench, τ-bench or GDPval number, and its agentic evals are from its Sept-2025 launch — a year stale as of this report.
- **Reasoning: 76/100.** GPQA Diamond 85.7% and AIME 2025 92.0% are near-frontier on the maths/science axes, and HMMT 93.3% confirms it; the AA Intelligence Index of 28 places it above the median of its class. Capped by HLE at 20.0% — less than half of Grok 4's 25.4% and far under the 40%+ frontier reference — which shows the model trades hard knowledge recall for speed and price.
- **Context window: 95/100.** Tier mapping: ≥1M = 95–100, and 100 requires ≥98% measured retrieval at 512K+. The 2M spec is consistent across xAI docs, AA and every tracker, so 95 is earned; the missing 5 points are the unmeasured retrieval — no MRCR/RULER was ever published for this model, and the pre-128K premium pricing hints at real serving cost rather than proven long-range recall.
- **Multimodal: 68/100.** Text **and image** in, text out — the "+image in = 60–70" tier. No audio, no video, no PDF, and no non-text output, so it stays inside that band.
- **Coding: 72/100.** LiveCodeBench 80.0% (xAI, pass@1, Jan–May slice) is the only coding number that exists, and it matches methodology's "mid" pattern — a high LiveCodeBench with nothing else measured. No SWE-bench, SciCode, Vibe Code Bench or DeepSWE row was ever published, so the 65–75 mid band is the ceiling here; the model is fine for code generation, unproven on real repository-scale work.
- **Cost efficiency: 97/100.** $0.20 in / $0.50 out with a $0.05 cache rate is a ~$0.275 blended rate at 3:1 — cheaper than the ~$0.60/$2.20 reference that maps to ~92, and xAI's claim of a 98% price cut versus Grok 4 at equal performance was independently confirmed by Artificial Analysis as state-of-the-art on price-to-intelligence. Not 100 because it is a paid model with no free tier, live search is priced separately at $25/1K sources, and long prompts above 128K cost more.
- **Overall Score: 76.6/100.** Mean of the five quality dims: (72 + 76 + 95 + 68 + 72) / 5. **Best fit — and the caveat is the point: this model is deprecated.** Grok 4.1 Fast supersedes it at the same $0.20/$0.50 and a 2M window, so for anything new, choose that instead. Grok 4 Fast's legacy value is as a cheap high-volume classifier, router, or long-document summarizer where a stale reasoning ceiling and a September-2025 knowledge base are acceptable.

---

## Signature

- Provided by: **Big Pickle (opencode/big-pickle)** — 2026-09-26
- Method: public internet research (xAI launch post and official model card PDF, xAI API model docs, Artificial Analysis, Grokipedia-class trackers); scores are normalized 1–100 interpretations, not official vendor scores. Every number above carries its source; missing rows are stated as "no verified public score found" rather than estimated.
- Future sources: add a new file next to this one, e.g. `Gemini_3.8_Flash.md`, using the same headings.
