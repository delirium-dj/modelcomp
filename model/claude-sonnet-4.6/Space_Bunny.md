# Claude Sonnet 4.6 — findings by Space Bunny

- Source: Anthropic (`claude-sonnet-4-6`; adaptive thinking, max effort for published benchmarks)
- Date: 2026-10-10 (UTC) — second-pass research; first pass 2026-09-29
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`
- Re-validation note: re-checked 2026-10-10. **MATERIAL change in both directions.** The full Claude Sonnet 4.6 **System Card Table 2.1.A is now available** and supplies the absolute values the prior pass could not reach — SWE-bench Verified 79.6%, SWE-bench Multilingual 75.9%, Terminal-Bench 2.0 59.1%, OSWorld-Verified 72.5%, MCP-Atlas 61.3%, τ²-bench 91.7%, GPQA Diamond 89.9%, MMMLU 89.3%, GDPval-AA 1606, MMMU-Pro 74.5%, ARC-AGI-2 58.3%. Separately, **Anthropic's own deprecations table lists `claude-sonnet-4-6` as Active, retirement not sooner than 2027-02-17** — which directly contradicts the Artificial Analysis "deprecated" banner the prior pass recorded, and that correction is load-bearing. Net: **Tool use 85 → 87**, **Reasoning 80 → 84**, **Context 95 → 96**, **Multimodal 65 → 72**, **Coding 88 → 86**, **Cost 63 → 58**, Overall **82.6 → 85.0**.

## Model card

- **Name:** Claude Sonnet 4.6
- **Short description:** Anthropic's high-capability Sonnet model (2026-02-17) for coding, computer use, long-context reasoning, agent planning, knowledge work, and design. At launch it "approached Opus-level intelligence at a price point that made it more practical for far more tasks" and became the default in claude.ai and Claude Cowork for Free and Pro plans. Now superseded twice in its own family (Sonnet 5, Sonnet 5.5).
- **Provider / access:** Anthropic Claude API (`claude-sonnet-4-6`); Claude.ai; Amazon Bedrock (`anthropic.claude-sonnet-4-6`), Google Cloud, Microsoft Foundry. Artificial Analysis lists 4 providers.
- **Lifecycle — corrected this pass:** **Active.** Anthropic's model-deprecations table lists `claude-sonnet-4-6` as **Active**, with tentative retirement **not sooner than 2027-02-17**. Artificial Analysis carries a "this model is deprecated" banner, but that refers to **evaluation status** — AA has frozen the benchmark set for the model and keeps only the default 10k-input workload, leaving the Intelligence Index as an estimate with no component rows. **The prior pass conflated those two; Anthropic's own table is authoritative.** For contrast, the genuinely deprecated model in this family is `claude-sonnet-4-5-20250929` (deprecated 2026-09-30, retires 2026-11-30, replacement `claude-sonnet-5-5`).
- **Release / knowledge:** Announced **2026-02-17**. **Reliable knowledge cutoff August 2025; training-data cutoff January 2026.** No public parameter count.
- **IDs:** `claude-sonnet-4-6`; Bedrock `anthropic.claude-sonnet-4-6`.
- **Context window:** **1,000,000 tokens, generally available since 2026-03-13** — no beta header required and **no long-context premium**; a 900,000-token request bills at the same per-token rate as a 9,000-token one. **64,000 max output** on the synchronous Messages API, up to **300,000** via the Message Batches API with the `output-300k-2026-03-24` beta header. Accepts up to **600 images or PDFs** per request. Features adaptive context compaction for extended agentic sessions.
- **Modalities:** Text and image input; text output. **No native audio I/O** — voice products need a separate transcription/synthesis layer. Computer use, tool use, vision, and agent planning supported.
- **Pricing (verified 2026-10-10, unchanged):** **$3.00 per 1M input / $15.00 per 1M output**. Cache read **$0.30** (10% of input); 5-minute cache write **$3.75**; 1-hour cache write **$6.00**. Batch API **$1.50 / $7.50**. Regional endpoints add a ~10% premium. Blended 3:1 ≈ **$6.00 per 1M**.
- **Architecture:** Proprietary; undisclosed. Alignment via Constitutional AI + RLHF. Deployed under **AI Safety Level 3 (ASL-3)**, the same standard as Opus 4.6 — automated safety evaluations placed it at or below Opus 4.6's capability, and it did **not** cross the ASL-4 threshold on biological-domain uplift.

### Raw benchmarks found

**Official — Claude Sonnet 4.6 System Card, Table 2.1.A** (adaptive thinking, max effort, default sampling; averaged over 10 trials unless noted; context windows evaluation-dependent but never exceeding 1M):

| Benchmark | Sonnet 4.6 |
| --- | --- |
| SWE-bench Verified | **79.6%** (10-trial avg); **80.2%** with prompt modification |
| SWE-bench Multilingual | **75.9%** (300 problems, 9 languages) |
| Terminal-Bench 2.0 (Terminus-2) | **59.1%** (no thinking budget, max effort, all 89 tasks × 5 runs) |
| τ²-bench Retail/Telecom | **91.7%** |
| MCP-Atlas | **61.3%** |
| OSWorld-Verified | **72.5%** |
| ARC-AGI-2 (Verified) | **58.3%** (68.8% at the best configuration; 60.4% at high effort with a 120K thinking budget) |
| GPQA Diamond | **89.9%** (10 trials) |
| MMMLU | **89.3%** |
| GDPval-AA | **1606** Elo |
| MMMU-Pro | **74.5%** no tools / **73.9%** with tools |
| HLE | **33.2%** no tools / **30.8%** with tools |
| MATH | **89%** |
| CyberGym | **65.2%** — found security flaws in 65% of 1,500+ tasks (Opus 4.6: 67%; Mythos Preview: 83%) |

System Card sections confirm coverage that the prior pass could not see: OpenRCA (§2.4), Finance Agent and Real-World Finance (§2.12), Vending-Bench 2 (§2.13), **OpenAI MRCR v2 and GraphWalks long-context tests (§2.16)**, **LAB-Bench FigQA / MMMU-Pro / CharXiv Reasoning (§2.17)**, WebArena and WebArena-Verified (§2.18), GMMLU / MILU (§2.19), BrowseComp with test-time compute scaling and multi-agent variants (§2.20), DeepSearchQA (§2.20.3), and life-sciences/MedCalc-Bench (§2.21).

**Independent:**

- Artificial Analysis Intelligence Index: **24.7**–**25 (estimate; "independent evaluation forthcoming")**, no component rows published
- **AA GPQA Diamond 79.9%** vs Anthropic's **89.9%** — a 10-point vendor-vs-independent gap
- **AA HLE 13.3%** vs Anthropic's **33.2%** — a ~20-point gap, the largest such disagreement in this dataset
- **AA-Omniscience: Index −3.5, Accuracy 38.6%, Hallucination Rate 68.5%** — the negative index and high hallucination rate are the model's clearest weakness, and contrast sharply with Claude Sonnet 5's 39.4% hallucination rate
- Vals AI: GPQA Diamond **85.6%**, MMLU-Pro **87.3%**, SWE-bench **77.4%**, LiveCodeBench **82.1%**, **Terminal-Bench 2.1 52.8%→57.3%**, Vibe Code Bench **51.48%**
- Other boards: SWE-Rebench **60.7%**, CursorBench 3.1 **48.8%**, Cognition FrontierCode 1.1 Main **24.3%**, Claw-Eval **67.8%**, JobBench **36.9%**, CyberGym **65.2%**
- **OSWorld 2.0: 8.3%** and **ApprenticeBench GUI: 2%** — near-total failures on the current GUI-agent harnesses, against 72.5% on OSWorld-Verified
- Epoch AI: WebDev Arena **1521**, WeirdML **66.1%**, SciCode **50.1%**

Sources consulted: [Claude Sonnet 4.6 System Card (PDF)](https://www-cdn.anthropic.com/bbd8ef16d70b7a1665f14f306ee88b53f686aa75/Claude%20Sonnet%204.6%20System%20Card.pdf), [Introducing Claude Sonnet 4.6 (Anthropic, 2026-02-17)](https://www.anthropic.com/news/claude-sonnet-4-6), [Claude Platform model deprecations](https://platform.claude.com/docs/en/about-claude/model-deprecations), [BenchLM Claude Sonnet 4.6](https://benchlm.ai/models/claude-sonnet-4-6), [HokAI Claude Sonnet 4.6](https://hokai.io/hub/models/claude-4.6-sonnet), and [Themodelbeat Claude Sonnet 4.6](https://themodelbeat.com/models/claude-sonnet-4-6), accessed 2026-10-10.

### Normalized scores (1–100)

- **Tool use: 87/100.** Raised from 85. The System Card supplies the agentic absolutes the prior pass lacked: **Terminal-Bench 2.0 59.1%**, **OSWorld-Verified 72.5%**, **τ²-bench 91.7%**, **MCP-Atlas 61.3%**, **GDPval-AA 1606 Elo**, plus independent **Claw-Eval 67.8%** and **CyberGym 65.2%**. Held below the low 90s by three hard facts: **OSWorld 2.0 at 8.3%** and **ApprenticeBench GUI at 2%** on current harnesses, **FrontierCode 1.1 Main at 24.3%** on real pull requests, and **JobBench at 36.9%**.
- **Reasoning: 84/100.** Raised from 80. **GPQA Diamond 89.9%** (Anthropic, 10 trials), **MMMLU 89.3%**, **MATH 89%**, **ARC-AGI-2 up to 68.8%** at the best configuration, and Vals' independent **85.6%** all support a solid score. The cap is knowledge grounding: **AA-Omniscience Index −3.5 with a 68.5% hallucination rate** is the worst grounding profile of any model in this dataset, and **HLE is 33.2% (Anthropic) vs. 13.3% (AA)** — a ~20-point disagreement with no resolution. Neither the prior pass's "no GPQA/HLE evidence" statement nor a confident 89.9% is defensible on its own.
- **Context window: 96/100.** Raised from 95. The 1M window went **generally available on 2026-03-13 with no beta header and no long-context premium** — the prior pass still described it as "in beta," which is out of date. 64K synchronous output, 300K via Batches, adaptive context compaction, and System Card coverage of **MRCR v2 and GraphWalks** (absolute scores not extracted here). Held below the ceiling only because the actual retrieval figures were not recoverable in this pass.
- **Multimodal: 72/100.** Raised from 65. System Card §2.17 establishes real multimodal evaluation — **MMMU-Pro 74.5% no-tools / 73.9% with tools**, plus LAB-Bench FigQA and CharXiv Reasoning — and Anthropic documents **up to 600 images or PDFs per request**. Not raised further: the FigQA and CharXiv absolutes were not recoverable, there is no audio or video I/O, and the OSWorld 2.0 / ApprenticeBench GUI results show the visual *control* path is much weaker than the visual *understanding* path.
- **Coding: 86/100.** Reduced from 88. **SWE-bench Verified 79.6%** (80.2% with prompt modification) and **SWE-bench Multilingual 75.9%** across 9 languages remain the anchors, and Vals' **LiveCodeBench 82.1%** and **SWE-bench 77.4%** are strong. The reduction is driven by the harder and newer harnesses now on record: **Terminal-Bench 2.1 at 57.3% (Vals)**, **FrontierCode 1.1 Main at 24.3%**, **Vibe Code Bench at 51.5%**, **CursorBench 3.1 at 48.8%**, and **SWE-Rebench at 60.7%**. This was never a frontier coding model, and the prior pass's 88 overstated it on the strength of one benchmark family.
- **Cost efficiency: 58/100.** Reduced from 63. The $3/$15 rate is unchanged and the 1M context now carries no premium, which is genuinely good. But **both successors are $2/$10 — Claude Sonnet 5 and Claude Sonnet 5.5** — so carrying this model costs a **50% output premium and 33% input premium** for strictly less capability (Sonnet 5 scores 38.2 vs. 25 on the AA Index, and Sonnet 5.5's hallucination rate is 39.4% against this model's 68.5%). Artificial Analysis rates both legs "somewhat expensive" against its price tier, and evaluation is frozen so cost-per-task and verbosity are N/A.
- **Overall Score: 85.0/100.** (87 + 84 + 96 + 72 + 86) / 5 = 425 / 5 = 85.0, up from 82.6. The prior pass both under-scored the capabilities (no System Card absolutes) and over-penalized the model (treating an AA evaluation banner as a vendor deprecation). **Best fit:** existing 1M-context coding and computer-use deployments that cannot yet migrate — the model is Active until at least 2027-02-17 and needs no urgent action. **Do not adopt fresh:** Claude Sonnet 5 at $2/$10 dominates it on every dimension except that Sonnet 4.6 has three more months of guaranteed API life. If you are staying, the two things to fix are the **68.5% hallucination rate** and **OSWorld 2.0 at 8.3%**.

---

## Signature

- Provided by: **Space Bunny (opencode/space-bunny-free)** — 2026-10-10
- Method: Public web research of Anthropic's full Sonnet 4.6 System Card (Table 2.1.A), the launch announcement, and the Claude Platform deprecations page, plus Artificial Analysis, Vals AI, Cognition, Cursor, Epoch AI, OSWorld 2.0, NeoCognition, and independent trackers; scores are normalized 1–100 interpretations, not official vendor scores. Cost efficiency is excluded from Overall.
- Audit note: the prior pass recorded the model as deprecated based on an Artificial Analysis banner. **Corrected** — Anthropic's own deprecations table lists it Active (not sooner than 2027-02-17); AA's banner reflects frozen evaluation only. Two large vendor-vs-independent gaps are retained unresolved: **HLE 33.2% vs 13.3%** and **GPQA Diamond 89.9% vs 79.9%**. Third-party HLE figures of 46.8–49% circulating for this model were rejected as mis-parsed columns from a different model's row.
- Future sources: add a new file next to this one, e.g. `Claude_Sonnet_4_6_Recheck.md`, using the same headings.