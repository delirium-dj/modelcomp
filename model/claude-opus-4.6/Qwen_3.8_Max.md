# Claude Opus 4.6 — findings by Qwen 3.8 Max

- Source: Anthropic (`claude-opus-4.6`)
- Date: 2026-10-23 (UTC)
- Re-researched: 2026-11-02 (UTC) — original draft preserved below; independent sources added.
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

> **Verdict (2026-11-02):** the October draft's one acknowledged gap was that **no independent AA read for Opus 4.6 had surfaced** — every figure was Anthropic vendor-run. It has now surfaced, but with a **variant caveat that governs this pass**: the AA page (and the BenchLM `claude-opus-4-6` page) score the **non-reasoning, high** mode — AA Index **26.4**, HLE **19.1**, GPQA-D **84.0**, CritPt **2.8** — which is a *different, weaker* mode than this report's subject (Adaptive-Thinking / Effort-Tuned Opus 4.6). Those non-thinking reads must **not** be imported as the reasoning model's ceiling (that would double-penalise a mode the draft never scored). What *does* transfer as an independent corroboration of the reasoning variant: **Epoch FrontierMath v2 T1-3 66.0 / T4 26.8** (high-mid reasoning — real, but below GPT-5.4-Pro 82.5 / Qwen-3.8-Max 74.7), **τ²-bench 84.8 (AA)** (solid tool use, below the vendor's Retail 91.9), **AA-LCR 67.0** (mid long-context, tempering the vendor MRCR 76 at 1M), and **AA-MMMU-Pro 72.5** (independently confirming the vendor's ~74/77 mid-70s vision). AA also flags the model **deprecated (superseded by Opus 4.7)** and its spec independently confirms text+image only, $5/$25. Because the applicable independent cells **corroborate rather than overturn** the draft's already-vendor-discounted table, **every dimension holds — Tool 87, Reasoning 87, Context 89, Multimodal 82, Coding 87, Overall 86.** A large share of BenchLM's headline numbers (SWE-bench Pro/LiveCodeBench Pro, GPQA-D 89.2, MMLU-Pro, AndroidWorld, SuperGPQA, ScreenSpot/MedXpert) are **competitor-sourced** (Meta Muse Spark / Arcee Trinity / Qwen comparison charts) and are quarantined.

## Model card

- **Name:** Claude Opus 4.6
- **Short description:** Anthropic's early-2026 flagship and the **first Opus-class model with a 1M-token context window** (beta), built for sustained agentic work — it plans more carefully, runs longer without degrading, operates reliably in massive codebases and catches its own mistakes. Its headline leaps are **abstract reasoning (ARC-AGI-2 68.8%, nearly double Opus 4.5)** and **agentic search/computer use**, alongside new Claude Code **Agent Teams** (swarms) and **Effort Tuning**. The main regression is scaled multi-tool coordination (MCP Atlas).
- **Provider / access:** Anthropic API (`claude-opus-4-6`), claude.ai, Amazon Bedrock, Google Cloud Vertex AI. Default model for Claude Code users on the Max plan. US-only inference option at 1.1x pricing for data residency.
- **Release / knowledge:** Released **2026-02-05**. Knowledge cutoff not stated in the sources reviewed.
- **IDs:** `claude-opus-4-6` (predecessor `claude-opus-4-5`; successors Opus 4.7 / 4.8 / 5; **AA now marks it deprecated, superseded by Opus 4.7**; BenchLM splits the base page [non-reasoning] from a `claude-opus-4-6-thinking` [Adaptive] sibling).
- **Context window:** **200K standard, 1M via beta header** (first Opus with 1M); **128K output tokens**; **Context Compaction (beta)** auto-summarizes older context for long-running agents. Dramatically reduced "context rot" — **MRCR v2 8-needle 1M ≈ 76%** vs Sonnet 4.5's 18.5%.
- **Modalities:** text + image (vision) in → text out; **no audio/video** (**AA spec independently confirms text+image only, 2026-11-02**). Reasoning via **Adaptive Thinking / Effort Tuning** (four levels: Low / Medium / High [default] / Max); full tool use, computer use, MCP, Agent Teams.
- **Pricing (as of 2026-10-23):** **$5 input / $25 output** per 1M tokens (unchanged from Opus 4.5); **prompts > 200K tokens: $10 / $37.50** per 1M. Premium flagship tier (same slot as Opus 4.7/4.8, GPT-5.6 Sol, Opus 5).
- **Architecture:** Undisclosed proprietary; safety profile matches/exceeds Opus 4.5 with the lowest over-refusal rate among recent Claudes and six new cybersecurity probes.

### Raw benchmarks found

Agentic coding & tool use (Anthropic vendor-run, via Vellum / ClaudeWorld):

| Benchmark | **Opus 4.6** | Opus 4.5 | Sonnet 4.5 | Gemini 3 Pro | GPT-5.2 |
| --- | --- | --- | --- | --- | --- |
| Terminal-Bench 2.0 | **65.4%** | 59.8% | 51.0% | 56.2% | 64.7% (Codex CLI) |
| SWE-bench Verified | **80.8%** | 80.9% | 77.2% | 76.2% | 80.0% |
| OSWorld (computer use) | **72.7%** | 66.3% | 61.4% | — | — |
| τ2-bench Retail | **91.9%** | 88.9% | 86.2% | 85.3% | 82.0% |
| τ2-bench Telecom | **99.3%** | 98.2% | 98.0% | 98.0% | 98.7% |
| MCP Atlas (scaled tools) | **59.5%** ↓ | 62.3% | 43.8% | 54.1% | 60.6% |
| BrowseComp (agentic search) | **84.0%** | 67.8% | 43.9% | 59.2% | 77.9% (Pro) |

Reasoning / knowledge:

- **ARC-AGI-2 (novel problem-solving): 68.8%** — nearly double Opus 4.5's 37.6%, above GPT-5.2 Pro (54.2%) and Gemini 3 Pro (45.1%); one of the largest single-benchmark leaps in a frontier update
- **HLE (no tools / with tools): 40.0% / 53.1%** — leads GPT-5.2 (36.6/50.0), Gemini 3 Pro (37.5/45.8) and Opus 4.5 (30.8/43.4) on both
- **GPQA Diamond: 91.3%** — +4.3pp over Opus 4.5, just below GPT-5.2 Pro (93.2%) and Gemini 3 Pro (91.9%)
- **MMMLU: 91.1%** (near-parity with Gemini 3 Pro 91.8%); **GDPVal-AA Elo 1606** (leads GPT-5.2 1462 by 144); **Finance Agent 60.7%** (best-in-class); BigLaw Bench 90.2% (40% perfect); 2x Opus 4.5 on computational/structural biology, organic chemistry, phylogenetics; leads all competitors on cybersecurity vulnerability detection

Multimodal:

- **MMMU Pro 73.9% (no tools) / 77.3% (with tools)** — steady but incremental (+3.3pp over Opus 4.5), trailing Gemini 3 Pro (81.0%) and GPT-5.2 (79.5/80.4)

Long context:

- **MRCR v2: 93.0% at 256K / 76.0% at 1M** — reliable recall at extreme length where Gemini 3 Pro degrades more noticeably

New capabilities: **Agent Teams** (research preview — a lead agent spawns independent teammates that message each other and share a dependency-tracked task list; higher token cost than sub-agents) and **Effort Tuning** (Low/Medium/High/Max).

> Provenance: All figures are **Anthropic vendor-run**, reproduced by Vellum's "Claude Opus 4.6 vs 4.5 Benchmarks" (2026-02-05) and ClaudeWorld's Opus 4.6 deep-dive (2026-02-06); the two agree on every shared cell. Comparison columns (Opus 4.5, Sonnet 4.5, Gemini 3 Pro, GPT-5.2) are Anthropic's runs of those models, so cross-vendor margins carry the usual vendor-harness caveat. Per methodology these are treated as an upper bound and discounted against neutral harnesses (Artificial Analysis, Vals, LiveBench). The **MCP Atlas regression (62.3 → 59.5)** is corroborated by both sources and is the model's clearest weakness (scaled multi-tool coordination). No independent Artificial Analysis index for Opus 4.6 surfaced in the sources reviewed. No benchmark was invented. **2026-11-02 reconciliation:** an AA read has since surfaced — but for the **non-reasoning, high** mode (deprecated, superseded by Opus 4.7), so its low composite (Index 26.4, HLE 19.1, GPQA 84.0, CritPt 2.8) is a *different variant* from this report's Adaptive-Thinking subject and is reported below without being applied to the reasoning scores; the transferable independent cells (Epoch, τ², AA-LCR, AA-MMMU-Pro) corroborate the vendor table.

Independent (added 2026-11-02 — AA [non-reasoning variant], BenchLM, Epoch, Vals, Cognition, plus neutral leaderboards):

- **BenchLM overall (base/non-reasoning page): 61.82/100 (#47/1004, 51 of 724 covered — partial/conservative);** the Adaptive-thinking sibling `claude-opus-4-6-thinking` is listed as *not computed*.
- **Variant-split AA reads (non-reasoning high — do NOT import as the reasoning ceiling):** AA Intelligence Index **26.4**, AA-GPQA-Diamond **84.0**, AA-HLE **19.1**, CritPt **2.8**, AA-IFBench 44.6, AA-Omniscience accuracy 45.8 / hallucination 80.1, AA terminalBenchHard 48.5, AA Speed **42.0 tok/s #44/46** (notably slow — non-thinking mode); AA composite now N/A (deprecated).
- **Transferable to the reasoning variant:** **Epoch FrontierMath v2 T1-3 66.0 / T4 26.8 (independent, reasoning-mode)** — high-mid but below the frontier; **τ²-bench 84.8 (AA)** (solid tool use, under the vendor Retail 91.9); **AA-LCR 67.0** (mid long-context); **AA-MMMU-Pro 72.5** (independent vision ≈ vendor no-tools 73.9).
- Other neutral-leaderboard coding/agentic: **SWE-Rebench 65.3**, **Vibe Code Bench (Vals) 57.57**, **Claw-Eval 70.4**, **CyberGym 66.6**, **FrontierCode 1.1 Main 26.9 (Cognition)**, **ResearchClawBench 19.9**, **JobBench 36.7**, **ApprenticeBench 5**; **ARC-AGI-3 0.5 (ARC Prize)** (near-floor on the hardest set).
- Long context: **AA-LCR 67.0** tempers the vendor MRCR 76-at-1M; the 1M window (beta) itself is a structural fact.

> Quarantined (competitor-sourced charts — excluded, not averaged): BenchLM's **SWE-bench Pro 53.4 / LiveCodeBench Pro 70.7 / ERQA / ScreenSpot Pro / MedXpertQA / HLE-notools 40 / HealthBench Hard / DeepSearchQA** come from the *Meta Muse Spark comparison chart*; **GPQA-D 89.2 / MMLU-Pro (Arcee) 89.1 / AIME25 99.8 / SWE-bench Verified* 75.6** from the *Arcee Trinity* chart; **SuperGPQA 95 / MMLU-Pro 82** from the *Qwen3.6-Plus* chart; **AndroidWorld 62.0** from the *Qwen3.8-27B* card. These are other vendors' marketing tables, not neutral harnesses — the AA/Vals/Epoch/Cognition/Anthropic-system-card cells above govern instead.

### Normalized scores (1–100)

- **Tool use: 87/100.** (hold — independent confirms) Elite tool orchestration on vendor numbers — **τ2-bench Retail 91.9% / Telecom 99.3%**, **BrowseComp 84.0%**, **OSWorld 72.7%** plus Agent Teams — is corroborated by an independent **τ²-bench 84.8 (AA)** landing solidly (if below the vendor's Retail), while the documented **MCP Atlas regression (59.5%)** and vendor-only reporting keep it below Opus 4.7 (90).
- **Reasoning: 87/100.** (hold — variant-caveated) The step-change **ARC-AGI-2 68.8%**, HLE 40.0/53.1 and GPQA 91.3 are vendor-run; the transferable independent read **Epoch FrontierMath v2 T1-3 66.0** confirms high-mid reasoning that is real but a step below GPT-5.4-Pro (82.5) / Qwen-3.8-Max (74.7); the AA Index **26.4 / HLE 19.1 / GPQA 84.0** belong to the **non-reasoning** mode and are not imported here. Capped below Opus 4.7 (89) as the earlier model.
- **Context window: 89/100.** (hold) The landmark **first Opus with a 1M-token window (beta)** and strong recall (**MRCR v2 93.0% at 256K / 76.0% at 1M**, 128K output, Context Compaction); independent **AA-LCR 67.0** mildly tempers the extreme-length figure, and the 200K→$10/$37.50 cliff keeps it below GPT-5.5's 93.
- **Multimodal: 82/100.** (hold — independent confirms) Text + image only (**AA spec independently confirms text+image**), **MMMU Pro 73.9%/77.3%** now corroborated by an independent **AA-MMMU-Pro 72.5** — genuinely mid-70s vision that trails Gemini 3 Pro (81.0%) / GPT-5.2; competent, not a differentiator.
- **Coding: 87/100.** (hold) **SWE-bench Verified 80.8%** and **Terminal-Bench 2.0 65.4%** lead Anthropic's lineup, but the neutral-harness reads are more mixed — **SWE-Rebench 65.3**, **Vibe Code (Vals) 57.57**, **AA terminalBenchHard 48.5**, **FrontierCode 1.1 26.9** — supporting strong-but-not-elite real-world coding; held below Opus 4.7 (89).
- **Cost efficiency: 60/100.** (hold) Premium flagship **$5/$25** (AA-confirmed) with a **$10/$37.50** cliff above 200K; Effort Tuning/Compaction help but **Agent Teams raise token cost**. Scored but **not** counted in the Overall.
- **Overall Score: 86/100.** (hold) Mean of Tool 87 + Reasoning 87 + Context 89 + Multimodal 82 + Coding 87 = 86.4 → 86. Best fit: **long-horizon agentic engineering and knowledge work** — multi-file refactors in massive codebases, research/finance/legal agents, computer-use automation and (with Agent Teams) parallel specialist swarms, where the 1M context and strong self-correction matter most; watch the MCP Atlas regression on very large tool catalogs and expect premium pricing. The 2026-11-02 independent pass **confirms** the vendor-discounted table rather than moving it (my 86 still sits below the queue's curated 88.1 and just under Opus 4.7), and **AA now marks Opus 4.6 deprecated (→ Opus 4.7)**.

---

## Signature

- Provided by: **Qwen 3.8 Max (qwen/qwen-3.8-max)** — 2026-10-23; re-researched 2026-11-02.
- Method (2026-11-02 refresh): original draft's Anthropic system-card / Vellum / ClaudeWorld table preserved; independent sources added from **Artificial Analysis** (`claude-opus-4-6`, non-reasoning-high page: now **deprecated → Opus 4.7**, Index 26.4, GPQA-D 84.0, HLE 19.1, CritPt 2.8, τ²-bench 84.8, AA-LCR 67.0, AA-MMMU-Pro 72.5, Speed 42.0 #44/46, spec text+image $5/$25) and **BenchLM** (base page 61.82 #47/1004, 51/724; Adaptive `claude-opus-4-6-thinking` not computed), surfacing **Epoch** (FrontierMath v2 T1-3 66.0 / T4 26.8), **Vals** (Vibe Code 57.57), **Cognition** (FrontierCode 1.1 26.9), **ARC Prize** (ARC-AGI-3 0.5) and neutral leaderboards (SWE-Rebench 65.3, Claw-Eval 70.4, CyberGym 66.6).
- Conflict handling: vendor-vs-independent recorded, never averaged, independent governs — the applicable independent cells (Epoch FM 66.0, τ² 84.8, AA-LCR 67.0, AA-MMMU-Pro 72.5) **corroborate the vendor-discounted table**, so **all dimensions hold and Overall holds 86**.
- Guards: **variant discipline** — the AA `claude-opus-4-6` page is the **non-reasoning, high** mode (Index 26.4 / HLE 19.1 / GPQA 84.0 / CritPt 2.8 / Speed 42.0), a *different* mode from this report's Adaptive-Thinking subject; those non-thinking reads are logged but **not imported** as the reasoning ceiling; AA composite is now N/A (deprecated → Opus 4.7); a large share of BenchLM cells are **competitor-sourced** (Meta Muse Spark / Arcee Trinity / Qwen charts) and **quarantined**; no benchmark was invented; scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `Qwen_3.8_Max.md`, using the same headings.
