# Claude Mythos 5 — Findings by Kimi K3.1 Pro

- **Research date:** 2026-11-06
- **Subject:** Claude Mythos 5 (`claude-mythos-5`), not Mythos Preview, Mythos 5.1, or Fable 5.
- **Method:** Fresh public-web research across Anthropic's launch post, exact-model API reference, joint system card, Artificial Analysis, BenchmarkList, and independent technical coverage. More than three independent searches were completed. No peer findings were read or inherited.
- **Attribution rule:** Only rows explicitly attributed to Mythos 5 are scored. Fable 5's Artificial Analysis Index and fallback-enabled results are excluded even though Anthropic describes the two as configurations of the same underlying model. Later Mythos 5.1 results are also excluded.

## Model card

| Field | Evidence |
| --- | --- |
| Developer | Anthropic |
| Exact identifiers | Claude API `claude-mythos-5`; Bedrock `anthropic.claude-mythos-5`; Google managed and Microsoft Foundry `claude-mythos-5` |
| Release / status | Released 2026-06-09; active with verification required; retirement not sooner than 2027-06-09 |
| Access | Restricted to organizations accepted into Anthropic verification programs; access was temporarily suspended on 2026-06-12 and restored for approved US organizations on 2026-07-01 |
| Relationship to Fable 5 | Same underlying model with safeguards lifted in some cyber/biology areas; different production configuration and exact model ID |
| Architecture | Not publicly disclosed; no verified parameter count found |
| Context / output | 1M-token context; 128K maximum synchronous output |
| Modalities | Text and image input; text output |
| Reasoning | Adaptive thinking always on; default effort `high`; evaluated rows also use `max` where stated |
| Knowledge cutoff | Reliable and training-data cutoff January 2026 |
| Price | $10 input / $50 output per 1M tokens |
| Cache / Batch | 5m cache write $12.50, 1h write $20, cache read $1 per 1M; Batch API 50% discount |
| Data policy | Mythos-class deployments require 30-day safety-monitoring retention by default |

### Raw benchmarks found

#### Agentic and tool-use evidence

- **OSWorld-Verified:** 85.0% at max effort (Anthropic system card).
- **DRACO:** 86.4% at max; effort curve 76.7% low, 80.6% medium, 82.8% high, 84.9% xhigh, 86.4% max.
- **BrowseComp:** 88.0%; **DeepSearchQA:** 94.2%.
- **Toolathlon:** 79.3 pass@1, 86.1 pass@3, 73.1 pass^3, averaging 19.8 turns (later exact-model system-card record).
- **ScreenSpot-Pro:** 90.7% with tools and 87.3% without tools.
- **Professional work:** OfficeQA 79.0%, OfficeQA Pro 67.1%, Harvey Legal Agent 16.9% all-pass with 92.0% mean criterion pass, and HealthAdminBench 51.9% task success.
- Artificial Analysis's **Fable 5** 64.9 launch Index, 1,932 GDPval-AA Elo, and fallback-enabled HLE 53% are not Mythos 5 measurements and are excluded.

#### Reasoning and knowledge evidence

- **GPQA-Diamond:** 94.1%, averaged over five trials at max effort; Anthropic describes the benchmark as saturated for this model class.
- **Humanity's Last Exam:** 59.0% without tools and 64.5% with tools at max; tool-assisted effort curve 59.8% low, 62.6% medium, 63.4% high, 64.2% xhigh, 64.5% max.
- **CritPt:** 28.6%; **RiemannBench:** 55.0%; **ArxivMath:** 87.8% without and 89.3% with tools.
- **USAMO 2026:** 99.8% using MathArena-style model-judge grading; this is a later exact-model system-card result, not an independent olympiad certification.
- **Factuality:** SimpleQA net 0.49, 100Q-Hard net 0.42, and multilingual factual-questions net 0.46; net scores reward correct answers, penalize incorrect ones, and give abstentions zero.
- **Multilingual:** Global MMLU 93.2%, INCLUDE 90.5%, and MILU 92.9%.

#### Coding and cybersecurity evidence

- **SWE-bench Verified:** 95.5%; **SWE-bench Multilingual:** 92.2%; **SWE-bench Pro:** 80.3%.
- **Terminal-Bench 2.1:** 88.0% for Mythos 5, distinct from Fable 5's 84.3%; **SWE-bench Multimodal:** 54.9%.
- **ProgramBench (Anthropic harness):** 93.0% best and 84.0% lowest reported hidden-test pass rate on the 166-task golden subset across 1–5 episodes.
- **Firefox 147 exploitation:** 88.4% full working-exploit rate; **CyberGym:** 83.8% target-vulnerability reproduction and 99.4% any-crash rate.
- **OSS-Fuzz:** 80.0% any-crash rate in the indexed exact-model record. Cyber metrics measure different outcomes and must not be compared as equivalent percentages.
- These restricted cyber capabilities are a central reason for verification-only access; they do not imply general availability or suitability for unrestricted deployment.

#### Long-context evidence

- **Graphwalks Parents:** 100.0% F1 at 256K and 97.5% at 1M, averaged over five trials.
- **Graphwalks BFS:** 91.1% F1 at 256K and 79.4% at 1M, averaged over five trials.
- The verified 1M API window and 128K output limit complement the measured 1M graph-reasoning results. No exact-model MRCR or AA-LCR row was found.
- Anthropic's qualitative million-token, file-based-memory demonstrations for Fable 5 are not used as numerical Mythos 5 evidence.

#### Multimodal, biology, and healthcare evidence

- **ChartMuseum:** 85.9% without and 93.2% with tools; **CharXiv-R:** 88.9% without and 93.5% with tools.
- **ChartQAPro:** 71.6% without and 72.9% with tools; **FigQA:** 88.9% without and 90.7% with tools.
- **BenchCAD Vision2Code-1000:** 0.379 voxel IoU without and 0.650 with Python; the separate full-benchmark record is 0.384 without tools.
- **BioMysteryBench:** 83.9% human-solvable and 46.1% human-difficult at launch; later system-card records use different subsets/values and are not merged.
- **LABBench2:** Literature Questions 86.5%, Database Questions 74.2%, Source Reliability 97.6%, FigQA 48.3%, Clinical Trials 91.2%, Patent Questions 79.8%, Reading Tables 82.4%, Supplementary Materials 65.9%.
- **HealthBench:** 62.7 overall, 66.0% Professional, and 44.8% Hard; these are different subsets. Protein-design and genomics case studies are qualitative, not normalized benchmark scores.

### Normalized scores (1–100)

- **Tool use: 97/100.** OSWorld 85.0%, DRACO 86.4%, DeepSearchQA 94.2%, strong Toolathlon consistency, and excellent document/research results demonstrate frontier agency; low legal all-pass and healthcare-administration success leave domain-specific reliability gaps.
- **Reasoning: 96/100.** HLE 64.5% with tools, GPQA 94.1%, USAMO 99.8%, and strong multilingual/factuality results support exceptional reasoning; CritPt 28.6% and RiemannBench 55.0% show that difficult physics and mathematics remain unsolved.
- **Context window: 97/100.** A verified 1M window and 128K output combine with Graphwalks Parents 97.5% and BFS 79.4% at 1M; the BFS drop and absent AA-LCR/MRCR measurements prevent a perfect score.
- **Multimodal: 94/100.** Excellent chart, figure, GUI-grounding, and scientific-image results support a very high rating; weaker BenchCAD and SWE-bench Multimodal results and text/image-only I/O cap it.
- **Coding: 97/100.** SWE-bench Verified 95.5%, Pro 80.3%, Terminal-Bench 88.0%, and ProgramBench 93.0% are exceptional; multimodal coding 54.9% and harness-specific cyber/coding results retain reproducibility caveats.
- **Cost efficiency: 45/100.** Cache reads and half-price Batch help, but $10/$50 base pricing is premium, long max-effort runs can be expensive, and restricted access plus mandatory safety retention reduce practical efficiency.
- **Overall Score: 96.2/100.** Half-up mean of 97, 96, 97, 94, and 97; best fit for verified cybersecurity, life-sciences research, long-context reasoning, and frontier agentic coding where restricted access and premium cost are acceptable.

## Signature

Kimi K3.1 Pro (Moonshot AI/kimi-k3.1-pro)

- **Provider:** Anthropic
- **Method:** Exact-ID public-web research; official specifications and system-card measurements triangulated with BenchmarkList and independent technical coverage; sibling configurations excluded.
- **Evidence limitation:** Mythos 5 is access-restricted, and no exact-model Artificial Analysis page was found. BenchmarkList independently indexes the records but many underlying measurements remain Anthropic-reported rather than independently rerun.
- **References:**
  - https://www.anthropic.com/news/claude-fable-5-mythos-5
  - https://platform.claude.com/docs/en/models/mythos-5/overview
  - https://www.anthropic.com/claude-fable-5-mythos-5-system-card
  - https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf
  - https://benchmarklist.com/models/anthropic-claude-mythos-5/
  - https://artificialanalysis.ai/articles/claude-fable-5-mythos-intelligence-index
  - https://www.datacamp.com/blog/claude-mythos-5
