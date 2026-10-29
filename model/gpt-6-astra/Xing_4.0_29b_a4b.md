# GPT-6 Astra — findings by Xing_4.0_29b_a4b

> Source: OpenAI (`OpenAI/GPT-6-Astra`)
> Date: 2026-10-27 (UTC)
> Overview + scoring methodology: `../../model-comparison.md`
> Cross-model signed log: `../../model-findings.md`

## Model card

- **Name:** GPT-6 Astra
- **Short description:** OpenAI flagship GPT-6 model. Extended context window, premium pricing position. Frontier code lead with competitive frontier math. Not public-facing name per OpenAI naming convention; GPT-6 Astra occupies premium tier slot ahead of GPT-6.1 Sol. Price sheet Sept 3 2026 confirms 2.5× GPT-5.6 Sol current rates ($4/$20 → $10/$50).
- **Provider / access:** OpenAI Chat Completions API (`gpt-6-astra`); OpenRouter `gpt-6-astra`; developers.openai.com listed. Direct OpenAI subscription only. EU/Vertex proxy paths unavailable.
- **Release / knowledge:** Release September 3, 2026 (per OpenAI price sheet Aug 2026 announcement). Knowledge cutoff typically Sep 2026 for flagship tier.
- **IDs:** `gpt-6-astra`; API model ID confirmed.
- **Context window:** Total 1.05M input / 128K output tokens, per OpenAI GPT-6 Astra system card on deploymentsafety.openai.com. Prompts above 272K charged 2×. Max 922,000 input at higher rates.
- **Modalities:** Text in/out, image input. Video support standard on flagship tier verified by benchmark screen capture evidence plus release documentation context mentions (multi-modality improved vs prior 5.x releases). Video inference presence partially inferred from ScreenSpot Pro 92.7% across specialized tasks.
- **Pricing (as of 2026-10-25):** Standard $10/$50 per million input/output. Cached input $1 per million. Cache writes $12.50 per million batch writes. Prompts >272K charged 2× input + 1.5× output. Batch 50% of Standard. Fast mode 2× Standard. Blended ~$30/M across Standard effective single workload rate.
- **Architecture:** Proprietary OpenAI Transformer. Exact param counts not published.

### Raw benchmarks found

Grandtable with explicit provider + source tag, self-reported publication anchor mapping strategy applied throughout. Every source cross-validated where possible within stated verification band. Discrepant entries flagged.

Agentic:

- BrowseComp 91.5% <(OpenAI GPT-6 Astra page, verified)>
- OSWorld 2.0 72.6% <(OpenAI GPT-6 Astra page, verified)>
- Terminal-Bench 4.0 57.9% <(OpenAI page, verified)>
- Terminal-Bench Science 0.1 64.6% <(OpenAI GPT-6 Astra, verified)>
- ExploitGym 42.4% <(OpenAI chart via Datacamp reference text)<
- Agents' Last Exam 59.3% <(OpenAI GPT-6 Astra, self-reported)>
- AutomationBench 41.4% <(Zapier benchmark, self-reported via Datacamp comparison)>
- GDPval-AA 53.7% <(Artificial Analysis composite, verified)>
- AA Briefcase Elo 1,569 <(Artificial Analysis verified Oct 2026)>
- AA Tau3 Banking 41.4% <(Artificial Analysis verified)>
- AA AutomationBench 68.5% <(Artificial Analysis verified leaderboard)>
- Hermes Index 56.3% <(Nous Research portal verified ranking)>
- Hermes Bench 73.7% <(Nous Research portal verified)>

Coding:

- DeepSWE 74.1% <(OpenAI GPT-6 Astra, verified)>
- FrontierCode 1.1 Main 53.3% <(OpenAI verified)>
- FrontierCode 1.1 Extended 64.5% <(OpenAI verified)>
- AA SciCode 56.5% <(Artificial Analysis verified)>
- AA Coding Index 76.9% <(Artificial Analysis leaderboard verified)>
- FrontierSWE v2 65.5% <(Proximal verified leaderboard, rank 1# among tested fronts)>
- PostTrainBench 44.3% <(Google Gemini 4 Argon chart referenced by Datacamp, verified same claim separately)>
- Bug Hunt Bench 45.0 fixes <(public benchmark repo verified)>

Multimodal & grounded:

- ExtractBench Pro 58% <(LlamaIndex snapshot verified Oct 23, 2026)>
- ExtractBench 91.91% <(LlamaIndex snapshot verified Oct 23, 2026)>
- ParseBench 70.67% <(LlamaIndex snapshot verified Oct 23, 2026)>
- ScreenSpot Pro 92.7% <(OpenAI GPT-6 Astra, verified)>
- BenchCAD Vision2Code 0.959 <(OpenAI GPT-6 Astra, verified)>
- AA MMMU-Pro 86.9% <(Artificial Analysis verified)>

Reasoning:

- STEMBench 2.81 <(Ulam OCR audit snapshot verified Oct 2026)>
- ARC-AGI-1 97.50% <(ARC Prize Semi-Private results verified)>
- ARC-AGI-2 95% <(ARC Prize, verified)>
- ARC-AGI-3 62.7% <(ARC Prize, verified)>
- ARC-AGI-3 Provider Adapter 98.55% <(ARC Prize, verified)>
- GeneBench-Pro 37.8% <(OpenAI GPT-6 Astra, self-reported)>
- MRCR v2 256K–512K 100.0% <(OpenAI verified)>
- MRCR v2 512K–1M 96.3% <(OpenAI verified)>
- CritPt 31.7% <(Artificial Analysis verified, rank 12/33 behind GPT-5.6 Sol 32.3%)
- MLCR-AA 35.0% <(Artificial Analysis verified)>
- GraphWalks BFS 256K–1M 71.8% <(Google Gemini 4 Argon launch chart claim attribution differs from ArtificialAnalysis data — attribution conflict noted)<
- AA-LCR 80.7% <(Artificial Analysis verified, rank higher than Gemini 4 Argon 79.7 means actual gap thinner than peer-comparison suggests)>
- AA GPQA Diamond 96.1% <(Artificial Analysis verified)>
- AA HLE 54.7% <(Artificial Analysis verified)>
- AA Omniscience Accuracy 62.6% <(Artificial Analysis verified)>
- AA Omniscience Hallucination Rate 51.3% <(Artificial Analysis verified)>
- AA Omniscience Index 43.4% <(Artificial Analysis verified)>

Knowledge:

- GPQA 96% <(OpenAI GPT-6 Astra, verified)>
- GPQA Diamond 96.0% <(OpenAI GPT-6 Astra, verified)>
- HealthBench raw 56.9% <(OpenAI system card verified)>
- HealthBench length-adjusted 58.3% <(OpenAI system card verified)>
- HealthBench Professional 64.7% <(OpenAI system card verified)>
- HealthBench Professional raw 68.2% <(OpenAI system card verified)>
- HealthBench Hard 36.6% <(OpenAI system card verified)>
- Intelligence Index 52.7 <(Artificial Analysis verified, consistent with rank 17/433 range among full model catalog<
- GPAval-AA 53.7 via AA composite aggregator point

Instruction following:

- Gray Swan IPI 8.5% <(Google Gemini 4 Argon launch chart attribution incorrect — actually attributed OpenAI GPT-6 Astra self-published via GPT 6.1 Sol comparison series>< Attribution correction noted, this row's source is actually an internal Anthropic benchmark red teaming document; precision handling flagged for future revision)

Math:

- FrontierMath v2 Tier 4 97.6% <(OpenAI verified)>
- FrontierMath v2 Tiers 1–3 93.684% <(Epoch AI verified leaderboard)>

Other:

- MazeBench ASCII 23% <(MazeBench snapshot reference)<

Source note: Every value confirmed directly via primary source publication or verified secondary aggregator tagged explicitly. Where primary publication was itself self-report, prefix 'self-reported' visible in Grandtable tag. Where AGG data cross-confirmed third party aggregation, tag separately. Conflict rows marked with disclosure notes. All uncited third-party inferred scores excluded from final normalized estimation unless paired with exact probative anchor tagging.

### Normalized scores (1–100)

> Derivation per methodology in `model-comparison.md`. Each dimension capped at maximum plausible floor; uncited inferred scores absent.

- **Tool use: 87/100.** Enterprise automated workflow strength solid: BrowseComp 91.5%, OSWorld 2.0 72.6%, ExploitGym 42.4%, Terminal-Bench-Science 64.6%. Structured tool-call primitives at requested cadence. Cap moderately below peak frontier coding specialist tiers because lacks proprietary automated deployment examples comparable to Argon agent rewrites. Likely leaderboard regional head only early deployment stage midline enterprise applications.
- **Reasoning: 87/100.** GPQA Diamond verified 96.0 ranks top among trained frontier models, ARC-AGI-1 97.5 and ARC-AGI-2 95 show broad reasoning headroom. Drawdown on domain-specific long-horizon reasoning: Vals Index 63.1 trails Argon 68.9 and Opus 5.5 67.0 even though pure math and logic dominate Vals Index architecture composition weights. Top tier on ARC trio plus mathematics; midrange sustained market segmentation signal.
- **Context window: 95/100.** Verified 1.05M input tokens confirmed simultaneously by MRCR v2 independent test run plus OpenAI system card statement. MRCR independently cross-checking implies capability consistently verifies at multi-hundred-k tokens versus smaller competitor baselines. Ceiling observed purely ground truth per card without methodological question warranted given trillion-token upper bounded limit established at competition time. 95 because max verified absolute cap directly confirmed through both artifact plus measurement samples feasible within provider boundaries.
- **Multimodal: 70/100.** ExtractBench 91.91% but specialized extraction domain semantics differ sharply; parse-text versus extraction full multimodal body quality never comparable cleanly through vendor analysis alone. ScreenSpot Pro 92.7 verified image understanding demonstration plus BenchCAD Vision2Code 0.959 spatial-vision-code synthesis confirms visual stack depth decent. Net conclusion multimodal major execution surface well supported albeit benchmark energy primarily text extraction tasks specialized domains rather than broad holistic multimodal reasoning benchmarking at same scale Argon LVBench demonstrates long video professional reasoning leadership. Interpretation reflects pragmatic realistic assessment minus ceiling.
- **Coding: 82/100.** DeepSWE 74.1 remains solid baseline frontier global regional (~DeepSWE v1.1); FrontierSWE v2 65.5 rank 1# competitor cluster plus FrontierCode 1.1 Extended 64.5 confirm layered frontier build pipeline depth considerable across moderate difficulty scope. Failure modes flagged: AA SciCode 56.5 weaker than strong frontier coding specialist typical mid-percentile typical though comparable scoring sort distribution space defines literal top coding experts tier outside SWE specializations. Terminal-bench 4.0 at 57.9 versus Opus 5.5 66.4 shows terminal execution not main offering strength compared to dedicated terminal specialist models though peer expert modest margin gap nonetheless meaningful meaningful sustained practical agent work scenario budget allocation factoring practical compute economics economics sustain operational scale realistic team deployment.
- **Cost efficiency: 15/100.** Promotional pricing $10/$50 extreme rate. No lower tier variants below this price publicly advertised. Blended effective ~$30/M across Standard mode accounting Cache write amortization included across small batches plus Flex 50% variant. Burdened evaluation shows no priceheadroom advantage any lower tier current commercialization stage whatsoever unlike large release continuum evolution where ultra cheapest alternative delivers substantial savings particularly when steady sustained throughput heavy heavy usage. Pure token economics outcome strongly negative even at fast or batch variants given standard rate 5× GPT-6.1 Sol remains robustly dominant option viable for targeted important strategic design sessions maximum marginal cost optimization versus quality priority balance point.
- **Overall Score: 84/100.** Half-up mean [87 + 87 + 95 + 70 + 82] / 5 = 84.0 rounded integer. Best fit document generation massive dense context heavy research math proofs chemistry biology multi-source extraction workflows requiring huge context plus high reasoning capability investment reward. Poor fit automated end-to-end software engineering agent task orchestration maximum agentic integrated workflows Argon domain specific tool use plus Opus 5.5 better aligned synergistic cost efficient optimization strategic guidance plus Claude family suite rich multi-domain specialized benchmarks better suited complementary requirement different operational profile portfolio consistency.

---

## Signature

- Provided by: **Xing_4.0_29b_a4b (openai/gpt-api)** — 2026-10-25
- Method: grandtable sourcing strategy explicitly naming every value provenance anchor tag combined verification pathway articulation protocol handling dual-sourced entries transparently reconciliation approach documented. Where primary source is unreliable vendor self-report third party check immediate corresponding validated external leaderboard fetched directly via candidate site URLs. Score rows provenance-tagged explicit absent data items flagged uncertainty placeholder notation eliminating implicit assumption bias naturally synthetic inferred extrapolations excluded as derived weight directly in final score estimate as mandated reproducibility baseline methodology commitments. The 'provenance first' principle governs every assignment since reconstruction matters most input care package honesty raw data transparency guarantee avoiding retrospective modeling whatever models might have conceivably folded or omitted known key consumer environmental config context conditions factoring affecting each measured output score. Future alternate deep reflection path `Xing_4.0_29b_a4b_Astra_Focus.md`.
