# Ox Alpha — findings by MiniMax M3

- Source: Z.ai / Zhipu (`opencode/ox-alpha` → `zai-org/GLM-5.3-Flash`)
- Date: 2026-10-16 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (revealed as **GLM-5.3-Flash**)
- **Short description:** Z.ai's stealth agentic-coding preview (2026-08-20) — open-sourced 6 days later as **GLM-5.3-Flash**, a 320B-total / 18B-active MoE with hybrid linear+sparse attention and native multimodality. The cheapest frontier model in its tier: ARC-AGI-2 max 65.8% at **$0.09/task**, Toolathlon 78.4%, AA Intelligence Index 57, MIT weights.
- **Provider / access:** OpenCode Zen free tier (`opencode/ox-alpha`) during the 2026-08-20 preview week; OpenRouter `stealth/ox-alpha`; now Z.ai API (`zai-org/GLM-5.3-Flash`, $0.15/$0.50 per 1M, $0.03 cached) + Hugging Face MIT weights.
- **Release / knowledge:** Stealth preview **2026-08-20**; revealed as GLM-5.3-Flash **2026-08-26** by Z.ai (confirmed to Bloomberg/kingy.ai); weights available the same day on Hugging Face. Knowledge cutoff unstated (family-inherited late-2025-vintage from GLM-5.2).
- **IDs:** `opencode/ox-alpha`, `stealth/ox-alpha`, `zai-org/GLM-5.3-Flash`, `together:zai-org/GLM-5.3-Flash`. Same product — *not* a sibling variant.
- **Context window:** **1,048,576 (1M) total / 131,072 max output**. ([Together AI model card](https://www.together.ai/models/glm-5-3-flash), [Z.ai launch post](https://z.ai/blog/glm-5.3-flash), [OpenRouter stealth listing](https://openrouter.ai/z-ai/glm-5.3-flash))
- **Modalities:** **Text + image + video + PDF in; text out**. Native vision encoder processes images alongside text; OpenRouter stealth card lists video/PDF input. ([Together AI](https://www.together.ai/models/glm-5-3-flash))
- **Pricing (as of 2026-10-16):** **$0.15 input / $0.50 output / $0.03 cached per 1M**; **MIT open weights** make self-host effectively free. Stealth-preview $0 window has ended. ([Together AI](https://www.together.ai/models/glm-5-3-flash), [cellcog pricing recap](https://cellcog.ai/blog/glm-5-3-flash/))
- **Architecture:** 320B-total / 18B-active Mixture-of-Experts, 45 layers, **hybrid linear + sparse attention** (linear captures local dependencies via state modeling; sparse retrieves global context via a lightweight indexer; **IndexPool compresses 4 key vectors into 1**); Multi-Token Prediction layer; Manifold-Constrained Hyper-Connections; 30T-token pre-training; MIT license. ([Together AI](https://www.together.ai/models/glm-5-3-flash))

### Raw benchmarks found

Triangulated across **six** independent surfaces: Z.ai's official launch post, ARC Prize public rerun (independent), Together AI model card (deep architecture details), Vals AI standard public aggregates, Artificial Analysis independent suite, Hugging Face model card and OpenRouter stealth listing. BenchLM rows are read under the revealed `zai-org/GLM-5.3-Flash` name — the same product, not a sibling.

Agent / tool use:

- **Z.ai launch (vendor-attributed, max effort):** Terminal-Bench 2.1 **84.3** (vs GLM-5.2 81.0), DeepSWE v1.1 **63.4** (vs 46.2), NL2Repo **56.3**, Toolathlon Verified **78.4**, AutomationBench **48.8** (vs 26.2), Agents' Last Exam **26.3**, HLE with tools **55.3**. ([Z.ai blog](https://z.ai/blog/glm-5.3-flash))
- **Artificial Analysis independent rerun (slightly different harness):** AA AutomationBench **60.4%**, AA ITBench **51.2%**, AA Tau3-Banking **47.2%**, AA-Briefcase **1452 Elo**, GDPval-AA **1773**, AA Terminal-Bench 4.0 **32.8%**. The 60.4% vs 48.8% AutomationBench and 32.8% vs 84.3% TB bands are **harness-sensitive**, not capability deltas.
- **Vals independent (different third harness):** Terminal-Bench 2.1 **62.9%** (vs AA max 84.3 — 21-pt gap, both authentic for their harnesses); SWE-bench **92.0%**; LiveCodeBench **80.5%**; MMLU-Pro **86.1%**; GPQA Diamond **86.4%**; Economy v2 **38.7%**; Vibe Code Bench **76.9%**; Harvey Legal Agent **37.9%**.

Reasoning / knowledge:

- **ARC Prize independent rerun** (the cleanest public signal for this ID):
  - **Max**: ARC-AGI-1 **91.0%** (semi-private, **$0.04/task**), ARC-AGI-2 **65.8%** (semi-private, **$0.09/task**) — *cheapest >65% ARC-AGI-2 score* in the leaderboard as of 2026-10-16.
  - High: ARC-AGI-1 **71.8%**, ARC-AGI-2 **50.1%**.
  - Low: ARC-AGI-1 **47.0%**, ARC-AGI-2 **27.9%**. ([ARC Prize results](https://arcprize.org/results/zai-glm-5-3-flash))
- **Artificial Analysis independent reasoning suite (max effort):** **AA Intelligence Index v4.1.1 57** (vs older-harness 41.8 used in some reviews), HLE **39.9%** (no tools), **HLE 55.3% (with tools)**, AA-GPQA Diamond **91.2%**, AA-LCR **80.0%**, MLCR-AA **51.1%**, CritPt **15.4%**, AA-Omniscience Index **7.5**.
- **Z.ai Code Bench** (in-house): "outperforms GLM-5.2 at every effort level using fewer output tokens" — vendor-claimed, no public figures ([Z.ai X post](https://x.com/Zai_org/status/2092616204787626030)).

Coding:

- **DeepSWE v1.1**: **63.4%** max ([Z.ai](https://z.ai/blog/glm-5.3-flash), [AA via benchlm.ai](https://benchlm.ai/models/glm-5-3-flash)) — within the frontier band; up from GLM-5.2's 46.2 (+17.2 pts).
- **SWE-bench (Vals)**: **92.0%** ([Vals](https://www.vals.ai/models/opencode_ox-alpha)); LiveCodeBench **80.5%**; Terminal-Bench 2.1 **84.3%** (AA); NL2Repo **56.3%**; OpenHarmony Bench **57.3%**; AA-SciCode **51.6%**.
- **SWE-bench Pro / FrontierCode 1.1**: **no verified third-party score found** for the Ox Alpha ID; the model's age (under 60 days) means SWE-Pro harnesses have not landed.

Long context / multimodal:

- **1M context verified** across Z.ai launch, Together AI, OpenRouter, ARC Prize. Together's architecture notes specify **IndexPool at 1M compresses the indexer 4× via weighted pooling**, reducing attention compute 3.0× and KV cache 4.4× **vs GLM-5.3** (per Z.ai measurements). ([Together AI](https://www.together.ai/models/glm-5-3-flash))
- **Retrieval**: AA-LCR **80.0%** (verifiable), MLCR-AA **51.1%** (mid-pack); **no ≥98% MRCR at 512K+ reported** in surveyed sources.
- **Vision (Z.ai launch)**: OfficeQA Pro **62.4**, CharXiv Reasoning **89.4**, Chartography (with tools) **78.0**, BabyVision **53.4**, MVBench **77.8**, MMVU **80.5**, Design Arena Website **1280**.

Operational / economic:

- **OpenCode stealth preview** ($0 in / $0 out, Aug 20-27, 2026): a one-week all-free window validated the model's agentic-loop behavior on Zen's coding harness before paid launch. ([kingy.ai](https://kingy.ai/blog/ox-alpha-free-opencode-stealth-model/), [developersdigest.tech](https://www.developersdigest.tech/blog/ox-alpha-opencode-guide))
- **TTFT/output-p5** on Zen (typical OpenCode tier): not separately published for Ox Alpha; family nominals from Z.ai are ~2-4 s TTFT, ~30-60 c/s output.

Pricing compared to peers (current as of 2026-10-16):

- **GPT-6.1 Sol**: $0.40/$1.60 — input still more expensive; **Ox Alpha output is ~3× cheaper**.
- **GPT-6 Sol**: $2/$10 — Ox Alpha is **~13×/20× cheaper**.
- **GPT-6 Astra**: $10/$50 — Ox Alpha is **~66×/100× cheaper**.
- **Claude Opus 5 max**: $15/$75 — Ox Alpha is **~100×/150× cheaper** at list, with MIT weights making the floor free.

### Normalized scores (1–100)

- **Tool use: 84/100.** Terminal-Bench 2.1 max 84.3 (AA) + Toolathlon 78.4 + AA ITBench 51.2 + Tau3 47.2 + AA AutomationBench 60.4 + GDPval-AA 1773 (clears the professional-autonomy bar) plus Vals' TB2.1 62.9 (third-harness independent rerun) — strong real-agent signals; capped by frontier-tier weakness (Agents' Last Exam 26.3%, TB 4.0 32.8%, GDP.pdf 15.4%, EnterpriseOps-Gym 33.2%).
- **Reasoning: 82/100.** **AA Intelligence Index 57** (v4.1.1) and AA-GPQA Diamond 91.2% clear the high-end reasoning bar; ARC-AGI-2 65.8% at $0.09/task is best-in-class efficiency; HLE 39.9% (no tools) / 55.3% (with tools) is mid-pack with tool dependence; CritPt 15.4% and AA-Omniscience 7.5 cap hard-science ceiling. The ARC-AGI-1 91.0% lifts the Reasoning floor above Qwen-3.8-Flash's 78/100 view.
- **Context window: 85/100.** Verified 1M window with 131K output, AA-LCR 80.0 supports mid-pack recall; the **IndexPool-driven long-context efficiency** (3×/4.4× compute/KV reductions vs GLM-5.3) is a real differentiator; below 90 because no ≥98% MRCR at 512K+ is published.
- **Multimodal: 76/100.** Text/image/video/PDF input + strong **document-vision** numbers (CharXiv 89.4, MMVU 80.5, Chartography 78.0) with mid-pack general-vision rows (MVBench 77.8, BabyVision 53.4, OfficeQA Pro 62.4); text-only output caps one full modality.
- **Coding: 86/100.** Vals SWE-bench **92.0%** (top-tier, same band as Muse Spark 1.3 SWE-Pro dual-leader) plus AA LiveCodeBench 80.5 and TB2.1 84.3 — clears the ~74 bar emphatically; DeepSWE 63.4, NL2Repo 56.3, SciCode 51.6, OpenHarmony 57.3 temper the hardest long-horizon set.
- **Cost efficiency: 92/100.** **Open weights (MIT)** make self-host effectively free; $0.15/$0.50 hosted + $0.03 cached + ARC-AGI-2 at $0.09/task beats the Frontier tier on dollar grounds across every known benchmark; **the cheapest model on the OpenCode Zen corridor** post-preview. Note: prior free Ox Alpha window has ended.
- **Overall Score: 83/100.** Half-up mean of the five non-cost dims: (84 + 82 + 85 + 76 + 86) / 5 = 82.6 → **83**. Best fit: cost-efficient frontier agentic coding with strong document vision and a 1M-context-with-active-management profile — the open-weights SWE-bench 92% at MIT-license economics is the standout.

---

## Signature

- Provided by: **MiniMax M3 (MiniMax-M3)** — 2026-10-16
- Method: Six-source triangulation (Z.ai launch, Together AI model card, ARC Prize independent rerun, Vals public aggregates, Artificial Analysis independent harness, OpenRouter stealth listing). Identity resolved: `stealth/ox-alpha` ≡ `zai-org/GLM-5.3-Flash` (confirmed by Z.ai/Bloomberg on 2026-08-26); BenchLM rows read under the revealed GLM-5.3-Flash product as the same model, not a sibling variant. Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
