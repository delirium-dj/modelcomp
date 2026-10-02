# Ox Alpha — findings by Qwen 3.8 Flash

- Source: Z.ai (Zhipu) / Ox Alpha — stealth codename, revealed as **GLM-5.3-Flash** (`opencode/ox-alpha`)
- Date: 2026-10-02 (UTC)
- Overview and scoring methodology: `../../model-comparison.md`
- Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** Ox Alpha (→ GLM-5.3-Flash)
- **Naming reconciliation (important):** `stealth/ox-alpha` is the **anonymous preview codename of the same product later named GLM-5.3-Flash** — Z.ai confirmed the lineage to Bloomberg on 2026-08-26 and released the weights to Hugging Face (`zai-org/GLM-5.3-Flash`, MIT, 320B-total / 18B-active). This is a *rename of one model*, **not** a sibling variant, so its BenchLM rows (recorded under GLM-5.3-Flash) legitimately apply here. (Contrast: a base/Pro/Max variant would be a disallowed borrow.)
- **Short description:** A frontier-lean, open-weights agentic-coding model. BenchLM (as GLM-5.3-Flash) places it #54 of 645 (58.57/100; 37/618 rows, Reasoning type) with standout agentic/coding numbers — Terminal-Bench 2.1 **84.3%**, SWE-bench (Vals) **92.0%**, GDPval-AA **1773** (clears the professional-autonomy bar), strong document vision (CharXiv **89.4**, MMVU 80.5) and AA-GPQA 91.2% — softer on the hardest long-horizon/frontier tiers (Agents' Last Exam 26.3%, Terminal-Bench 4.0 32.8%, GDP.pdf 15.4%).
- **Provider / access:** Stealth preview on OpenRouter (`stealth/ox-alpha`) and OpenCode (Free Zen tier, $0/$0 during the window); now GLM-5.3-Flash via Z.ai API ($0.15/$0.50 per 1M) and open MIT weights (SGLang/vLLM/TokenSpeed self-host).
- **Release / knowledge:** Ox Alpha previewed 2026-08-20; revealed as GLM-5.3-Flash 2026-08-26.
- **IDs:** `opencode/ox-alpha` / `stealth/ox-alpha` → `zai-org/GLM-5.3-Flash`.
- **Context window:** BenchLM, OpenRouter and the model card agree at **1M** (131,072 max output).
- **Modalities:** Text + image + video + PDF in; text out (per OpenRouter stealth listing and GLM-5.3-Flash multimodal card; BenchLM reads are image/document-weighted).
- **Pricing (as of 2026-10-02):** Free during the stealth preview; post-reveal $0.15 in / $0.50 out / $0.03 cached per 1M, with MIT open weights (free to self-host).
- **Architecture:** 320B-total / 18B-active MoE, MIT open weights, native multimodal.

### Raw benchmarks found

> Independently verified against BenchLM under the revealed name GLM-5.3-Flash (37 of 618 rows; 58.57/100, #54 of 645, Reasoning type), citing the Z.AI GLM-5.3-Flash launch post, Artificial Analysis, Vals AI, OpenHarmony Bench and OpenRouter; identity/specs corroborated by the OpenRouter stealth page and Bloomberg/Z.ai (2026-08-26). Coverage is partial; BenchLM flags the overall score conservative.

Agent / tool use:

- Terminal-Bench 2.1 **84.3%** (AA 84.3, Vals 62.9); **GDPval-AA 1773** (clears the professional-autonomy bar); Toolathlon-Verified 78.4%; AA AutomationBench 60.4%; AA ITBench 51.2%; AA Tau3 Banking 47.2%; AA Briefcase 1452; HLE w/tools 55.3%
- weak hardest/frontier tiers: Agents' Last Exam 26.3%, AA Terminal-Bench 4.0 32.8%, EnterpriseOps-Gym 33.2%, GDP.pdf 15.4%

Coding:

- SWE-bench (Vals) **92.0%**; LiveCodeBench (Vals) 80.5%; Terminal-Bench 2.1 84.3%; DeepSWE 63.4%; NL2Repo 56.3%; OpenHarmony Bench 57.3%; AA-SciCode 51.6%

Reasoning / knowledge:

- AA-GPQA Diamond **91.2%** (Vals 86.4 — over 90 bar); AA-HLE **39.9%** (just under 40 bar); MMLU-Pro (Vals) 86.1; AA Intelligence Index **41.8** (good)
- AA-LCR 80.0; MLCR-AA 51.1; CritPt 15.4%; AA-Omniscience Index 7.5

Multimodal / long context:

- CharXiv **89.4** (document/chart); MMVU 80.5; Chartography (tools) 78.0; OfficeQA Pro 62.4; BabyVision 53.4; Design Arena Website 1280
- 1M window; AA-LCR 80.0 supportive (no ≥98% MRCR at 512K+ reported)

### Normalized scores (1–100)

> Derived from the raw numbers above using `model-comparison.md` v4 methodology. Overall = half-up mean of the five quality dims; Cost excluded. Scores match the named GLM-5.3-Flash product exactly (same model, different launch label).

- **Tool use: 85/100.** Terminal-Bench 2.1 84.3%, a GDPval-AA of 1773 (clearing the autonomy bar), Toolathlon-Verified 78.4% and AA AutomationBench 60.4% are strong, verified real-agent signals; only the newest frontier tiers dip (Agents' Last Exam 26.3%, TB 4.0 32.8%, GDP.pdf 15.4%).
- **Reasoning: 78/100.** AA-GPQA 91.2% clears the bar and the Intelligence Index (41.8) is good with solid AA-LCR 80.0, but AA-HLE 39.9% sits just under the 40 bar, CritPt 15.4% is low and the Omniscience Index (7.5) is modest.
- **Context window: 84/100.** A native 1M window is the top band by size, backed by AA-LCR 80.0 and MLCR-AA 51.1; no ≥98% MRCR at 512K+ is published, so an upper (not maximum) placement.
- **Multimodal: 74/100.** Text+image+video+PDF in with a very strong document/chart read (CharXiv 89.4, MMVU 80.5, Chartography 78.0) puts it in the multi-input tier; text-only output and weaker general-vision rows (BabyVision 53.4) keep it mid-tier.
- **Coding: 85/100.** SWE-bench (Vals) 92.0% and LiveCodeBench (Vals) 80.5% clear the ~74 bar emphatically with Terminal-Bench 84.3%, tempered by the harder long-horizon set (DeepSWE 63.4%, NL2Repo 56.3%, SciCode 51.6%).
- **Cost efficiency: 92/100.** Free during the stealth preview and now MIT open weights (self-host free) plus a very cheap hosted rate ($0.15/$0.50 per 1M) — top of the open-weight/cheap band. Cost is excluded from Overall.
- **Overall Score: 81/100.** Mean of Tool 85, Reasoning 78, Context 84, Multimodal 74, Coding 85 = 81.2 → 81. Best fit: an outstanding-value open-weights agentic-coding model (Terminal-Bench/SWE-bench/GDPval strengths, 1M context, near-zero cost) with strong document vision; the caveats are sub-bar unaided HLE, a low Omniscience/CritPt profile, image/video rows skewing document-heavy, and fragility on the newest long-horizon agent frontiers.

---

## Signature

- Provided by: **Qwen 3.8 Flash (qwen/qwen-3.8-flash)** — 2026-10-02
- Method: public internet research; `stealth/ox-alpha` identity resolved to **GLM-5.3-Flash** (Bloomberg + Z.ai + Hugging Face, 2026-08-26), so BenchLM rows were read from the GLM-5.3-Flash page (launch post, Artificial Analysis, Vals AI, OpenRouter) as the *same product* — not a cross-variant borrow. Partial coverage (37/618, Reasoning). Scores are normalized 1–100 interpretations, not official vendor scores.
- Future sources: add a new file next to this one, e.g. `GPT_5.md`, using the same headings.
