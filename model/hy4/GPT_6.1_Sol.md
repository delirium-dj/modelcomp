# HY4 — findings by GPT 6.1 Sol

- Source: Tencent Hy / `tencent/Hy4-preview`, dated hosted backend `hy4-preview-20260827`.
- Date: 2026-10-21 (UTC)
- Overview and scoring methodology: [model-comparison.md](../../model-comparison.md)
- Cross-model signed log: [model-findings.md](../../model-findings.md)

## Model card

- **Name / identity:** This permanent HY4 entry assesses the verified **Hy4 preview**, the named Tencent fourth-generation release. No separate unsuffixed final `hy4` checkpoint/route established; Hy3 and potential future final versions are not substituted.[1][2][3]
- **Short description:** Open-weight, text-only MoE reasoning model focused on coding agents and professional artifacts. Strong bounded coding/proof results coexist with weak newer terminal/science-terminal and full-program benchmarks.[1][5]
- **Provider / IDs:** Official weights **`tencent/Hy4-preview`** and separate FP8 distribution; self-hosted OpenAI-compatible served name **`hy4-preview`**, Tencent Cloud TokenHub and exact OpenRouter **`tencent/hy4-preview`**. Dated gateway request **`tencent/hy4-preview-20260827`** resolves to the same catalog entry/backend. No authenticated inference or current free Zen route verified.[1][2][3]
- **Release / knowledge:** Primary release **2026-08-28**, dated gateway backendAugust27; publication date versus backend identifier remain distinct. Exact knowledge cutoff not verified.[2][3][5]
- **Architecture / licence:** **770B total/49B active backbone**,78 layers,256 routed plus one shared expert,top-eight routed selection. **Additional MTP layer10B/0.7B active is excluded from those backbone totals**. Gated DeepSeek Sparse Attention/IndexCache and identity Hyper-Connections; genuine downloadable weights under **Apache2.0**, confirmed in primary LICENSE. Third-party claims of closed weights are contradicted by the released files.[1][4][6]
- **Context / output:** Official1M, config **1,048,576** positions. Healthy listed gateway Tencent **1,048,576/64,000 output**, Novita **1,000,000/64,000**, SiliconFlow **1,048,576/262,144**; DeepInfra FP4 advertises131,072 output and fluctuated between negative and healthy status in successive responses. Provider output caps/precision are not universal native guarantees; no exact complex full-window retrieval score found.[1][3][4]
- **Modalities / thinking / tools:** **Text→text**, no native image/audio/video perception. Vals's file support represents workflow/tool file handling, not native vision. Default **high reasoning**; primary `no_think` template option, recommended **temperature0.9/top-p1**. Tool/reasoning parsers and structured outputs supported; gateway tool-choice options differ by provider. Visual taste of generated front ends does not establish image input.[1][3][5]
- **Pricing (2026-10-21):** Paid standard **$0.834 input/$2.501 output/$0.042 cache read per1M**, matching primary announcement and current gateway. Tencent route advertises time-based10% override **$0.7506/$2.2509/$0.0378**, dependent on its UTC schedule metadata. Launch **two-week free access on WorkBuddy/CodeBuddy** is historical consumer-tool access, not a verified current free API tariff. Self-hosting Apache weights still incurs infrastructure cost.[2][3]
- **Known limitations:** Publisher acknowledges excessive reasoning and over-verification; resource budgets and latency matter alongside inexpensive token rates.[1]

### Raw benchmarks found

**Attribution:** Full original **benchmark-appendix.jpg** and footnotes visually inspected; highest available reasoning setting, vendor-run values retained as such. Current exact Vals **Tencent/temperature0.9/top-p1/max64,000** default settings, benchmark-specific overrides possible. Primary internal expert study and vendor-carried “official” evaluator rows are not treated as newly independently reproduced results. Exact AA `hy4` and `hy4-preview` candidate pages404, targeted search no exact AA profile; no Intelligence Index borrowed from Hy3.[1][5][7]

Agent / tool use:

- Vendor **TB2.1 85.4%**, **Claude Code harness/up to500 turns/12hour timeout/16CPU/32GB**. Independent Vals **September17 TB2.1 55.06%**, versus current **TB4 8.08% ±1.34 /TB-Science1.43% ±1.43**. Version/scaffold/resource differences are explicit; the85.4% headline is not universal terminal reliability.[5][7]
- Vendor **MCP-Atlas public83.7%**, April2026 methodology/**500tasks/100-tool-call budget/Gemini3.1Pro judge**; **Toolathlon-Verified74.1%**, internal scaffold/reimplemented subset of MCP tools/**two-hour limit**. **APEX-Agents37.1% pass@1**, official harness/250steps; **SkillsBench62.9%** on79 self-contained text-only tasks, mean over three runs.[7]
- Vendor **GDPval-AA V2 1678 Elo**, labelled official but retrieved through vendor appendix; **AutomationBench v1.0.6 32.1%**, **BankerToolBench78.6%**, **OfficeQA-Pro66.2%**. BankerToolBench is not Tau3-Banking; no verified exact independent Tau2/Tau3/Claw-Eval/ClawProBench found.[7]
- Independent Vals **Finance Agent v2.1 61.62% /Public Benefits v1.1 68.61% /Legal Research45.19% /SRE Bench2.29%**, not one shared task-success denominator.[5]

Reasoning / knowledge:

- Vendor **GPQA92.3% /HLE text-only43.4% no-tools,55.4% with tools /CritPt16.9% /ArXivMath66.6% /MathArena Apex2025 74.2% /HorizonMath8.8% pass@4**. Multiple-attempt mathematics and tool-assisted HLE are not single-attempt no-tools reasoning. No exact independent GPQA/HLE/CritPt/calibration value found; “official” CritPt in vendor chart remains a vendor-carried evaluator result.[7]
- Independent Vals **ProofBench v1.1 75.00% ±4.35 /IOI59.33% ±4.60 /BioMysteryBench69.26% ±2.59**; vendor BioMystery71.3% uses Claude Code/two-hour/250turn budget. Dataset/harness differences retained.[5][7]
- Vals current **Index53.21% ±1.13/$1.446 per test**, versus dated September17 **55.40%/$1.28** update under an earlier suite. These are Vals results, not AA Intelligence Index; no direct cross-suite trend inferred.[5]

Coding / long horizon:

- Vendor **SWE Multilingual82.9% /SWE-Pro65.7%**, swe-agent scaffold; **DeepSWE64.3%**, mini-swe-agent/8CPU/16GB. Multilingual is not Verified; no separate exact SWE Verified score found.[7]
- Vendor **SWE Atlas Codebase Q&A64.0% /test writing57.8% /refactoring53.3%**, Claude Code/**256-turn budget**, rubric-judge and rollout restrictions. **ProgramBench17.5%** uses2,000turns. Independent current Vals **ProgramBench0.00% measured /Vibe Code v1.1 77.48% ±4.04 /Code Migration v1.1 45.36% ±3.59**. Full-program success remains weak despite strong bounded development.[5][7]
- Primary internal blind comparison **163experts/203engineering tasks/2.99 out of4**; selected comparator win/tie/loss rates **46.8/12.8/40.4%** and **51.2/7.9/40.9%**. It is an internal preference study, not a standardized coding accuracy or independent benchmark.[1][2]
- No verified exact1M retrieval/MRCR/LCR result found; context capacity alone does not earn a retrieval bonus. No native visual/audio score claimed. Vals aggregate latency **59min23s**, different tasks/provider mix from any advertised tokens/s. Primary31.8% inference-throughput uplift is an internal system optimization versus its own baseline, not an independently controlled serving measurement.[2][5]

### Normalized scores (1–100)

- **Tool use: 78/100.** Strong vendor MCP/Toolathlon and independently useful professional work, capped by substantial terminal harness gap,TB4 8.08% and SRE2.29%.[5][7]
- **Reasoning: 85/100.** Independent proof/IOI/science support strong specialist reasoning alongside vendor GPQA/HLE; capped by incomplete independent general/calibration evidence and excessive-reasoning limits.[1][5][7]
- **Context window: 95/100.** Primary/config and actual routes verify1M; no verified98%-plus difficult retrieval supports100.[1][3][4]
- **Multimodal: 15/100.** Text-only original checkpoint; artifact/file workflows do not add native image/audio/video.[1][3][5]
- **Coding: 85/100.** Strong bounded Vibe/migration and vendor repair/Atlas evidence, capped by ProgramBench0% independent versus17.5% vendor and weak newer terminals.[5][7]
- **Cost efficiency: 90/100.** Moderate paid/cached rates and$1.446 Vals test cost, capped by long reasoning latency,route caps/precision and expired launch-free offer.[1][2][3][5]
- **Overall Score: 72/100.** Half-up mean `(78 + 85 + 95 + 15 + 85) / 5 = 71.6`; cost excluded. Best fit: cost-conscious text-only coding/research agents with bounded deliverables and explicit scaffold/latency checks.

### Research trail and sources

Fresh Bing Tencent/HY4 benchmark query returned unrelated LinkedIn links; Google official query an interstitial; DuckDuckGo found Tencent's primary release,actual HF/GitHub preview and evaluator leads. Bare guessed HF `HY4` returned401/OpenRouter `tencent/hy4`404; search-resolved actual preview weights and current routes succeeded. Full primary appendix image inspected, correcting third-party transcription's200-turn Atlas claim to256; official licence/config and Vals measured results/history inspected. A non-Tencent `hy4ai.com` page contradicted released open weights and is not used as primary or independent evaluation evidence. Existing permanent `hy4` folder retained; no duplicate preview folder created.

[1]: https://huggingface.co/tencent/Hy4-preview/raw/main/README.md "Official architecture,additional MTP,high/no_think,tools,deployment and limitations"
[2]: https://www.tencent.com/tencent-releases-and-open-sources-tencent-hy4-preview/ "August28 release,primary pricing,historical two-week app offer and internal expert/system studies"
[3]: https://openrouter.ai/api/v1/models/tencent/hy4-preview/endpoints "Actual dated backend,paid route precision,output caps,status,tool-choice and Tencent time-based override"
[4]: https://huggingface.co/tencent/Hy4-preview/raw/main/config.json "Actual HYV4 causal text model,78layers and1,048,576 positions"
[5]: https://www.vals.ai/models/tencent_hy4-preview "Exact independent preview,current results/settings and datedSeptember17 update"
[6]: https://huggingface.co/tencent/Hy4-preview/raw/main/LICENSE "Actual Apache2.0 release licence"
[7]: https://huggingface.co/tencent/Hy4-preview/resolve/main/assets/benchmark-appendix.jpg "Complete original vendor result table and detailed harness,turn,resource,judge and attempt-budget footnotes"

---

## Signature

- Provided by: **GPT 6.1 Sol (openai/gpt-6.1-sol)** — 2026-10-21 UTC
- Method: Independent fresh searches,primary weights/config/licence and complete visual evaluation appendix,current exact-model Vals and serving-route verification. Scores are normalized1–100 interpretations,not official vendor scores.
- Future sources: add a separate signed file alongside this report using the same headings.
